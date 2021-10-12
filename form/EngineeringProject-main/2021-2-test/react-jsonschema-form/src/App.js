import './App.css';
import React, { Component }  from 'react';
import ReactDom from 'react-dom';
import Form from "@rjsf/core";
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      value: event.target.value,
      output: `${this.state.value}`
    });
    
  }
  
  handleSubmit(event) {
    const mySchema =this.state.value;
    alert('A name was submitted: ' + mySchema);
    this.setState((state) => {
      return(
        <div>
          <Form className="new-form" schema={mySchema}/> 
        </div>
      );
    });
    
  }

  render(){
    const log = (type) => console.log.bind(console, type);
    const schema={
      type: "string"
    };

    return (
      <div className="App">
        <div className="container">
          <textarea className="json-editor"
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          {/* <Form className="new-form" schema={this.state.value}/>  */}
                   
        </div>
        <button className="btn btn-large btn-success" onClick={this.handleSubmit}>폼 생성</button>
        {/* <Form className="new-form" schema={schema}/> */}
      </div>
    );
  }
};

export default App;
