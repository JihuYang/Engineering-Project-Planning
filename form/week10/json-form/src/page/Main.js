import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';
//import formElement from '../formElement.json';
import formElement from '../formGroupedElement.json';
import style from '../components/style/style.txt';
import axios from 'axios';


function Main() {
//   const onClickRead = () => {    
//     var data="read";
//     console.log(data);
//     // axios.post('http://localhost:3002/api/upload',data)
//     // //성공시 then 실행
//     // .then(function (response) {
//     //   console.log(response);
//     //   alert(response);
//     // })
//     // //실패 시 catch 실행
//     // .catch(function (error) {
//     //   console.log(error);
//     // });
//     axios.get('http://localhost:3002/api/upload').then((Response)=>{
//     console.log(Response.data);
// }).catch((Error)=>{
//     console.log(Error);
// })
//   };
  
  const [clicked, setClicked] = useState(false);
  const [elements, setElements] = useState(null);
  // const [form, setForm] = useState('{\n"page_label": "이력서 Form",\
  // "fields": [{}');
  const [json, setJson] = useState(null);
  
  //const { fields, page_label } = elements ?? {}
  const { group, fields } = elements ?? {}

  const [content, setContent] = useState(null);

  useEffect(() => {
    setJson(jsonSkeleton);
  }, [])

  const onClickCreate = () => {
    var schema_str = JSON.stringify(formElement);
    var schema = schema_str;
    console.log(schema);
    var myobj = JSON.parse(schema);
    setElements(myobj);
    setClicked(true);
  };
  // const download = () => {
  //   var para = document.createElement("div");
  //   const element = document.createElement("a");
  //   para.innerHTML = document.getElementById("main").innerHTML;
  //   element.href = URL.createObjectURL(para);
  //   element.download = para.innerHTML+".txt";
  //   document.body.appendChild(element); // Required for this to work in FireFox
  //   element.click();
  //   setContent(para);
  //   console.log(para);
  //   alert(para);
  //   //document.getElementById("save").appendChild(para);
  // }
  

  const download = () => {
    const element = document.createElement("a");
    const content = document.getElementById('main').innerHTML;
    const reader = new FileReader();
    const styleFile = '../components/style/style.txt';
    // reader.readAsText(styleFile.file);
    // const stylecontent = reader.result;
    // console.log(stylecontent);
    const cssfile = new Blob([style], {type: 'text/plain'});
    const file = new Blob([content], {type: 'text/html'});
    // file += cssfile;
    console.log(file);
    element.href = URL.createObjectURL(file);
    element.download = "myFile.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    // document.getElementById("main").appendChild(content);

    element.click();
  }
  const onClickSave = () => {
    const content = document.getElementById('main').innerHTML;
    console.log(content);
    axios.post('http://localhost:3002/api/upload',content)
    //성공시 then 실행
    .then(function (response) {
      console.log(response);
      alert("데이터를 저장하였습니다.");
    })
    //실패 시 catch 실행
    .catch(function (error) {
      console.log(error);
    });
  };
  // const onClickDownload = () => {
  //   var formObj=JSON.parse(form);
  //   const element = document.createElement("a");
  //   const file = new Blob([document.getElementById('json-editor').value], {type: 'text/plain'});
  //   element.href = URL.createObjectURL(file);
  //   element.download = formObj.page_label+".txt";
  //   document.body.appendChild(element); // Required for this to work in FireFox
  //   element.click();
  // };

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields.forEach(field => {
      const { field_type, field_id } = field;
      if (id === field_id) {
        switch (field_type) {
          case 'checkbox':
            field['field_value'] = event.target.checked;
            break;

          default:
            field['field_value'] = event.target.value;
            break;
        }
      }
      setElements(newElements)
    });
    console.log(elements)
  }
  

  return (

    <FormContext.Provider value={{ handleChange }}>
      <div className="App" id = "main">
        <div class="container-fluid w-50">
          <Row>
            <Col>
              <button className="btn btn-large btn-secondary create-btn" onClick={() => { onClickCreate()}}>Check out the Various Layouts of the Form</button>
            </Col>
          </Row>
          <div>
            <form>  
              <div class="m-3 text-center">
              Save 
              <input type="radio" id="Version1" value="Version1"></input> Version1
              <input type="radio" id="Version2" value="Version1"></input> Version2
              <button className="btn btn-large btn-secondary create-btn" onClick={() => {download();onClickSave();}}>save</button>
              </div>
            </form>
          </div>
          <h4 class="text-center my-3">Layout Version 1</h4>
          <hr></hr>
          <div className="new-form" id="new-form">
            {clicked ?
              <form>

                {group.map((group, key) => {
                  return (
                    <div key={key}>
                      <div class="mx-4 my-2">
                        <h6>{group.group_name}</h6>
                        {/* {group.fields.length} */}
                        {/* {Math.floor((Math.random() * (group.fields.length-0+1)) + 0)} */}

                      </div>
                      <div class="row m-3 h-auto border">
                        <div class="col d-flex align-items-center justify-content-center">
                          <div class="input-group my-2">
                            {/* {group.fields.length} */}
                            {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </form>
              : null}
          </div>
          <h4 class="text-center my-3">Layout Version 2</h4>
          <hr></hr>
          <div className="new-form">
            {clicked ?
              <form>
                {group.map((group, key) => {
                  return (
                    <div key={key}>            <div class="mx-4 my-2 text-center">
                      <h6>{group.group_name}</h6>
                    </div>
                      <div class="m-3 border">
                        {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
                      </div>
                    </div>
                  );
                })}
              </form>
              : null}
          </div>
        </div>
      </div>
    </FormContext.Provider >
  );
}

export default Main;