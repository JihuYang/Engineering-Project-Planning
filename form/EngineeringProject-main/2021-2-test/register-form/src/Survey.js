import React from "react";
import objectData from "./objectData.json";
import arrayData from "./arrayData.json";
import survey from "./survey.json";
import 'bootstrap/dist/css/bootstrap.min.css';

const Survey=()=> {
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

  /* Object로 전달 받았을 때 방법1 map 사용*/
  // const List = Object.entries(objectData).map(([key,value],index)=>{
  //   var TagName=value;
  //   const element=(
  //       <div className="dataForm row align-items-center mb-2" id="dataFrom" key={index}>
  //       <div className="col-sm {value}">{key}:</div>
  //       <div className="col-sm">
  //           <input id={key} type={value} defaultValue="" placeholder={key} />
  //       </div>
  //     </div>
  //   );

  //   return (
  //     element
  //   );
  // });

  function TagName(props){
    const customTag = props.type==='button'?
        <button type={props.type} className="btn btn-secondary">확인</button> : 
        (props.type==='text'?<div className={props.type}></div>:<input className={props.type} type={props.type}/>);
    return customTag;
  }

  const tagList = Object.entries(objectData).map(([key,value])=>{
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
      <h1>설문 조사</h1>
      <br/>
      <div className="container">{surveyData}</div>
    </div>
  );
};

export default Survey;
