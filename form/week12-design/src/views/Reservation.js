import '../css/App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../json/Reservation Form.json';
import ReactLoading from 'react-loading';
import { assertExpressionStatement } from '@babel/types';
import "assets/css/custom.css";
import axios from 'axios';



function Reservation(props) {

  const [clicked, setClicked] = useState(true);
  const [elements, setElements] = useState(null);
  const [isOpen, setJsonFile] = useState(false);
  const [isShow, setList] = useState(false);
  const [json, setJson] = useState(null);
  const [fileList, setFileList] = useState([
    'test.json']);
  const [jsonfileList, setJsonFileList] = useState([
      'test.json']);
  const [styleFile, setStyleFile] = useState("test");
  const [dataFile, setDataFile] = useState("test");
  const { group, fields } = elements ?? {}


  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCreate = () => {

    var schema_str = JSON.stringify(jsonSkeleton);
    var schema = schema_str;
    console.log(schema);
    var myobj = JSON.parse(schema);
    setElements(myobj);
    setClicked(true);
  };

//   const loading = async() => {
//     setLoading(false);
//     const data = axios.get(dfd)
//     setValue(data);
//     setLoading(true);
// } => data를 서버에서 가져와서 그 다음에 바로 load(setLoading)를 하는 걸 순차적으로 실행하도록 'async'를 쓴다.

const download = () => {
  const element = document.createElement("a");
  const content = document.getElementById('main').innerHTML;
  const contentWidth = "<div style='width:50%;'>" + content + "</div>";
  //console.log("contentWidth: " + contentWidth);
  const cssText = styleFile;
  console.log("cssText: " + cssText);
  const file = new Blob([cssText + contentWidth], { type: 'text/html' });
  element.href = URL.createObjectURL(file);
  element.download = "layout.html";
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

  useEffect(()=>{
    onClickCreate();
    onClickTXT();
  },[]);

  
  React.useEffect(() => {
    //fileList toggle
    //setClicked(true);
  }, []);
//   React.useEffect(() => {
//     axios.get('http://localhost:3010/api/read')
//       //성공시 then 실행
//       .then(function (response) {
//         console.log(response);
//         console.log(response.data);

//         const path = require('path');
//         console.log("after get filelist: " + response.data);
//         console.log(fileList.length);
//         for (let i = 0; i < response.data.length; i++) {
//           console.log("for file" + i + path.extname(response.data[i])); // .html
//           if(path.extname(response.data[i]) != ".json") {
//             response.data.splice(i);
//           }
//         }
//         setFileList(response.data);
//       })
//       //실패 시 catch 실행
//       .catch(function (error) {
//         console.log(error);
//       });
//     //fileList toggle
//     setList(isShow => !isShow);
//   }, []);
  //style.txt 파일 read
  const onClickTXT = () => {
    axios.get('http://localhost:3015/api/readTXT')
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

  //filelist에서 읽어올 파일 선택
  //const onClickSelectFile = (data) => {
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3010/api/file',
    //   data: {
    //     fileIndex: data
    //   }
    // }).then(function (response) {
    //   console.log(response);
    //   setDataFile(response.data);
    // })
    //   //실패 시 catch 실행
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  //};

  const onClickGetJson = () => {
    setJsonFile(isOpen => !isOpen);
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
          <div className="new-form" data-color={props.bgColor}>
            {clicked ?
              <form>
                {group!=null ? group.map((group, key) => {
                  return (
                    <div key={key}>
                      <div class="mx-4 my-2">
                        <h6>{group.group_name}</h6>
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
                }) : <ReactLoading type="spinningBubbles" color="blue" height={667} width={375} />}
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
                {group != null ?group.map((group, key) => {
                  return (
                    <div key={key}>
                      <div class="mx-4 my-2 text-center">
                        <h6>{group.group_name}</h6>
                      </div>
                      <div class="m-3 border text-center row justify-content-center">
                        {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
                      </div>
                    </div>
                  );
                }): <ReactLoading type="spinningBubbles" color="blue" height={667} width={375} />}
              </form>
              : null}
          </div>
        </div>
      )
    },
    {
      tabTitle: (
        <li className={activeIndex === 2 ? "is-active" : ""} onClick={() => tabClickHandler(2)}> Version3 </li>
      ),
      tabCont: (
        <div>
          <h4 class="text-center my-3">Layout Version 3</h4>
          <hr></hr>
          <div className="new-form bg-1 pt-5">
            {clicked ?
              <form>
                {group != null ?group.map((group, key) => {
                  return (
                    <div key={key}>
                      <div class="mx-4 my-2 text-center">
                      <h5 class="bg-1-color">{group.group_name}</h5>
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
                }): <ReactLoading type="spinningBubbles" color="blue" height={667} width={375} />}
              </form>
              : null}
          </div>
        </div>
      )
    },
    {
      tabTitle: (
        <li className={activeIndex === 3 ? "is-active" : ""} onClick={() => tabClickHandler(3)}> Version4 </li>
      ),
      tabCont: (
        <div>
          <h4 class="text-center my-3">Layout Version 4</h4>
          <hr></hr>
          <div className="new-form bg-1 pt-5">
            {clicked ?
              <form class="grid">
              {group != null ?group.map((group, key) => {
                  return (
                    <div className ={key%2 == 0?"":""} key={key}>
                      <div class="mx-4 my-2 text-center">
                      <h5 class="bg-1-color">{group.group_name}</h5>
                      </div>
                      <div class="float-left">
                          <div class="input-group my-2">
                            {/* {group.fields.length} */}
                            {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
                          </div>
                      </div>
                    </div>
                  );
                }): <ReactLoading type="spinningBubbles" color="blue" height={667} width={375} />}
              </form>
              : null}
          </div>
        </div>
      )
    },
    // {
    //   tabTitle: (
    //     <li className={activeIndex === 4 ? "is-active" : ""} onClick={() => tabClickHandler(4)}> Version5 </li>
    //   ),
    //   tabCont: (
    //     <div>
    //       <h4 class="text-center my-3">Layout Version 5</h4>
    //       <hr></hr>
    //       <div className="new-form bg-1 pt-5">
    //         {clicked ?
    //           <form class="grid">
    //           {group != null ?group.map((group, key) => {
    //               return (
    //                 <div className ={key%2 == 0?"":""} key={key}>
    //                   <div class="mx-4 my-2 text-center">
    //                   <h5 class="bg-1-color">{group.group_name}</h5>
    //                   </div>
    //                   <div class="m-3 border">
    //                         {/* {group.fields.length} */}
    //                         {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
    //                       </div>
    //                 </div>
    //               );
    //             }): <ReactLoading type="spinningBubbles" color="blue" height={667} width={375} />}
    //           </form>
    //           : null}
    //       </div>
    //     </div>
    //   )
    // }
  ];

  const handleChange = (id, event) => {
    const newElements = { ...elements }
    newElements.fields?.forEach(field => {
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
            {/* <Col >
              <button className="btn btn-small btn-outline-warning get-json-source mb-3 create-btn" onClick={() => {  }}>File List</button>
              <ul className={isShow ? "show-menu" : "hide-menu"}>
                <li style={{ listStyle: 'none' }}>
                  <div>
                    <ul class="list-group list-group-flush">
                      {fileList.map((file, index) => (
                        <span key={index}>
                          <a class="list-group-item" onClick={() => { onClickSelectFile(index); onClickGetJson(); }}>{file}</a>
                        </span>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </Col> */}
            <Col>
              <button className="btn btn-small btn-outline-dark get-json-source mb-3 create-btn" onClick={() => { onClickGetJson() }}>Json Source</button>
            </Col>
            <Col>
              <button className="btn btn-small btn-outline-success get-json-source mb-3 create-btn" onClick={() => { download(); }}>Save</button>
            </Col>
          </Row>
          <Row style={{ display: isOpen ? 'block' : 'none' }}>
            <div><pre>{JSON.stringify(jsonSkeleton, null, 2)}</pre></div>
          </Row>
          <Row  >
            <Col>
              <div className="menuBar">
                <ul className="tabs is-boxed">
                  {tabContArr.map((section, index) => {
                    return section.tabTitle
                  })}
                </ul>
                <div id="main">
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

export default Reservation;