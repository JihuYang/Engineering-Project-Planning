import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, FormGroup, Label, Col, Row } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import Element from '../components/Element';
import { FormContext } from '../FormContext';
import jsonSkeleton from '../components/elements/jsonSkeleton.json';
//import formElement from '../formElement.json';
import formElement from '../formGroupedElement.json';

function Main() {
  const [clicked, setClicked] = useState(false);
  const [elements, setElements] = useState(null);
  // const [form, setForm] = useState('{\n"page_label": "이력서 Form",\
  // "fields": [{}');
  const [json, setJson] = useState(null);

  //const { fields, page_label } = elements ?? {}
  const { group, fields } = elements ?? {}

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
          <Row>
            <Col>
              <button className="btn btn-large btn-secondary create-btn" onClick={() => { onClickCreate() }}>Check out the Various Layouts of the Form</button>
            </Col>
          </Row>
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