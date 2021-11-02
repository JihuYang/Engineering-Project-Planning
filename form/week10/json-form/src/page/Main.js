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
const path = '../components/elements/jsonSkeleton.json';

// const fileList = ["로그인 Form.json", "양지후 Form.json"];
// import formDir from '../server/json/'+'fileList[0]';

function Main() {

  const [clicked, setClicked] = useState(false);
  const [elements, setElements] = useState(null);
  const [isOpen, setJsonFile] = useState(false);
  const [isShow, setList] = useState(false);
  // const [form, setForm] = useState('{\n"page_label": "이력서 Form",\
  // "fields": [{}');
  const [json, setJson] = useState(null);
  const [fileList, setFileList] = useState([ 'style.txt',
  'test.json',
  'undefined.json',
  '양지후 Form.json',
  '이력서 Form.json']);
  // fileList = [
  //   'style.txt',
  //   'test.json',
  //   'undefined.json',
  //   '양지후 Form.json',
  //   '이력서 Form.json'
  // ];
  // setFileList([
  //   'style.txt',
  //   'test.json',
  //   'undefined.json',
  //   '양지후 Form.json',
  //   '이력서 Form.json'
  // ]);
  const [styleFile, setStyleFile] = useState("test");
  // setStyleFile("test");
  //const { fields, page_label } = elements ?? {}
  const { group, fields } = elements ?? {}


  const [activeIndex, setActiveIndex] = useState(0);

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
    console.log("content: "+ content);
    const cssText = styleFile;
    console.log("cssText: "+ cssText);
    cssText.concat(' ', content);
    
    console.log("concat: "+ cssText);

    // content = cleanContent(content);
    // setText(stylecontent);    

    // console.log("style content: " + stylecontent);
    const file = new Blob([cssText+content], { type: 'text/html' });
    // file += cssfile;
    console.log("result file: " + file);
    element.href = URL.createObjectURL(file);
    element.download = "myFile.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    // document.getElementById("main").appendChild(content);

    element.click();
  }
  const onClickRead = () => {
      axios.get('http://localhost:3010/api/read')
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
        console.log(response.data)
        setFileList(response.data);
      })
      //실패 시 catch 실행
      .catch(function (error) {
        console.log(error);
      });
      //fileList toggle
      setList(isShow => !isShow);
  };
  const onClickTXT = () => {
    axios.get('http://localhost:3010/api/readTXT')
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
        console.log(response.data)
        setStyleFile(response.data);
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

  const onClickGetJson = () => {
    setJsonFile(isOpen => !isOpen);
    //var schema_str = JSON.stringify(formElement);
  };

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}> Version1 </li>
      ),
      tabCont: (
        <div>
          <h4 class="text-center my-3">Layout Version 1</h4>
          <hr></hr>
          <div className="new-form">
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
        </div>
      )
    },
    {
      tabTitle: (
        <li className={activeIndex === 1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}> Version2 </li>
      ),
      tabCont: (
        <div>
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
      )
    }
  ];

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
      <div className="App">
        <div class="container-fluid w-50">
          <Row className="d-flex justify-content-start">
            <Col >
              <button className="btn btn-small btn-outline-warning get-json-source mb-3 create-btn" onClick={() => { onClickRead(); onClickTXT();}}>File List</button>
              <ul className={isShow ? "show-menu" : "hide-menu"}>
                <li>
                  {fileList} 
                </li>
              </ul>
            </Col>
            <Col>
              <button className="btn btn-small btn-outline-dark get-json-source mb-3 create-btn" onClick={() => { onClickGetJson() }}>Json Source</button>
            </Col>
            <Col>
              <button className="btn btn-small btn-outline-secondary create-btn" onClick={() => { onClickCreate() }}>Result</button>
            </Col>
            <Col >
              <button className="btn btn-small btn-outline-success get-json-source mb-3 create-btn" onClick={() => { download() }}>Save</button>
            </Col>
          </Row>
          <Row style={{ display: isOpen ? 'block' : 'none' }}>
            <div><pre>{JSON.stringify(formElement, null, 2)}</pre></div>
          </Row>
          <Row>
            <Col>
              <div className="menuBar"  id="main">
                <ul className="tabs is-boxed">
                  {tabContArr.map((section, index) => {
                    return section.tabTitle
                  })}
                </ul>
                <div>
                  {tabContArr[activeIndex].tabCont}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </FormContext.Provider >
  );
}

export default Main;