import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';
import axios from 'axios';

function Main() {

  const [clicked, setClicked] = useState(false);
  const [elements, setElements] = useState(null);
  const [isOpen, setJsonFile] = useState(false);
  const [isShow, setList] = useState(false);
  const [json, setJson] = useState(null);
  const [fileList, setFileList] = useState([
    'test.json']);

  const [styleFile, setStyleFile] = useState("test");
  const [dataFile, setDataFile] = useState("test");
  const { group, fields } = elements ?? {}


  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setJson(jsonSkeleton);
  }, [])

  const onClickCreate = () => {
    var schema_str = JSON.stringify(dataFile);
    var schema = schema_str;
    console.log(schema);
    var myobj = JSON.parse(schema);
    setElements(myobj);
    setClicked(true);
  };

  const download = () => {
    const element = document.createElement("a");
    const content = document.getElementById('main').innerHTML;
    const contentWidth = "<div style='width:50%;'>" + content + "</div>";
    console.log("contentWidth: " + contentWidth);
    const cssText = styleFile;
    const file = new Blob([cssText + contentWidth], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = "layout.html";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  // const onClickRead = () => {
  //   axios.get('http://localhost:3010/api/read')
  //     //성공시 then 실행
  //     .then(function (response) {
  //       console.log(response);
  //       console.log(response.data)
  //       setFileList(response.data);
  //     })
  //     //실패 시 catch 실행
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  //   //fileList toggle
  //   setList(isShow => !isShow);
  // };
 
  React.useEffect(() => {
    axios.get('http://localhost:3010/api/read')
      //성공시 then 실행
      .then(function (response) {
        console.log(response);
        console.log(response.data)
        setFileList(response.data);
        const path = require('path');
        console.log(fileList.length);
        for (let i = 0; i < fileList.length; i++) {
          console.log("for file" + i + path.extname(fileList[i])); // .html
          if(path.extname(fileList[i]) != ".json") {
            fileList.splice(i);
          }
        }
        console.log(fileList);
        setFileList(fileList);
        console.log(path.extname(fileList[0])); // .html
      })
      //실패 시 catch 실행
      .catch(function (error) {
        console.log(error);
      });
    //fileList toggle
    setList(isShow => !isShow);
  }, []);

  //style.txt 파일 read
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

  //filelist에서 읽어올 파일 선택
  const onClickSelectFile = (data) => {
    axios({
      method: 'post',
      url: 'http://localhost:3010/api/file',
      data: {
        fileIndex: data
      }
    }).then(function (response) {
      console.log(response);
      setDataFile(response.data);
    })
      //실패 시 catch 실행
      .catch(function (error) {
        console.log(error);
      });
    };

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
          <div className="new-form" >
            {clicked ?
              <form>
                {group != null ?group.map((group, key) => {
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
                }):null}
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
                {group != null ? group.map((group, key) => {
                  return (
                    <div key={key}>
                      <div class="mx-4 my-2 text-center">
                        <h6>{group.group_name}</h6>
                      </div>
                      <div class="m-3 border">
                        {group.fields ? group.fields.map((field, i) => <Element key={i} field={field} />) : null}
                      </div>
                    </div>
                  );
                }) : null}
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
              <button className="btn btn-small btn-outline-warning get-json-source mb-3 create-btn" onClick={() => {}}>File List</button>
              <ul className={isShow ? "show-menu" : "hide-menu"}>
                <li style={{ listStyle: 'none' }}>
                  <div>
                    <ul class="list-group list-group-flush">
                      {fileList.map((file, index) => (
                        <span key={index}>
                          <a class="list-group-item" onClick={() => { onClickSelectFile(index);onClickCreate();}}>{file}</a>
                        </span>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </Col>
            <Col>
              <button className="btn btn-small btn-outline-dark get-json-source mb-3 create-btn" onClick={() => { onClickGetJson() }}>Json Source</button>
            </Col>
            <Col>
              <button className="btn btn-small btn-outline-secondary create-btn" onClick={() => { onClickCreate(); onClickTXT(); }}>Layout</button>
            </Col>
            <Col>
              <button className="btn btn-small btn-outline-success get-json-source mb-3 create-btn" onClick={() => { download(); }}>Save</button>
            </Col>
          </Row>
          <Row style={{ display: isOpen ? 'block' : 'none' }}>
            <div><pre>{JSON.stringify(dataFile, null, 2)}</pre></div>
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

export default Main;