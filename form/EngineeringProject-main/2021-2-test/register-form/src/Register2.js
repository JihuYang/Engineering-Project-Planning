import React  from "react";
import objectData from "./objectData";
import arrayData from "./arrayData";
import survey from "./survey.json";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component{
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
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    
  console.log("objectData: ", typeof objectData);
  console.log(objectData);
  console.log("arrayData: ", typeof arrayData);
  console.log(arrayData);

  const newArrayData = arrayData.map((item,index)=>{
    console.log("아이템:",item,"/n","인덱스:",index);
    const itemlist = Object.entries(item).map(([key,value],index)=>{
      return (
        <div className="row align-items-center mb-2">
          <div className="col-sm">{key}</div>
          <div className="col-sm">
          <TagName className="col-sm" type={value}/>
          </div>
        </div>
      );
    });
    return (
      <div>
      {itemlist}
      <hr/>
      </div>
    );
  });

  const surveyData = survey.map((item,index)=>{
    console.log("아이템:",item,"/n","인덱스:",index);
    const itemlist = Object.entries(item).map(([key,value],index)=>{
      return (
        <div className="row align-items-center mb-2">
          <div className="col-sm">{key}</div>
          <div className="col-sm">
          <TagName className="col-sm" type={value}/>
          </div>
        </div>
      );
    });
    return (
      <div>
      {itemlist}
      <hr/>
      </div>
    );
  });


  function TagName(props){
    const customTag = props.type==='button'?
        <button type={props.type} className="btn btn-secondary">확인</button> : 
        (props.type==='text'?<div className={props.type}></div>:<input className={props.type} type={props.type}/>);
    return customTag;
  }

  // const tagList = Object.entries(objectData).map(([key,value])=>{
  //   return (
  //     <div className="row align-items-center mb-2">
  //       <div className="col-sm">{key}</div>
  //       <div className="col-sm">
  //       <TagName className="col-sm" type={value} name={key}/>
  //       </div>
  //     </div>
  //   );
  // });

  const tagList = Object.entries(this.state.value).map(([key,value])=>{
    return (
      <div className="row align-items-center mb-2">
        <div className="col-sm">{key}</div>
        <div className="col-sm">
        <TagName className="col-sm" type={value} name={key}/>
        </div>
      </div>
    );
  });

  console.log("태그 리스트",tagList);
  return (
    <div className="App">
      {/* <ul className="container">{newArrayData}</ul> */}
      {/* <div>{newObjectData}</div> */}
      {/* <tagName type="text"/>{objectData.FirstName} */}
      {/* <div className="container"><MyForm/></div> */}
      {/* <div className="container">{List}</div> */}
      {/* <div className="container">{newArrayData}</div>
      <div className="container">{surveyData}</div> */}
      <h1>회원가입</h1>
      <br/>
      <div className="container">
        {tagList}
      </div>

      <form onSubmit={this.handleSubmit}>
          <textarea 
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <br/>
          <input type="submit" value="Show form layout" />
        </form>
        <div>{this.state.output}</div>
    </div>
  );
  }
};

export default Register;
