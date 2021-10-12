import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";


function App() {
  return (
    <div className="App">
      <div clasName="container">
        <JSONInput
          id          = 'a_unique_id'
          locale      = { locale }
          height      = '550px'
      />
    </div>
    </div>
  );
}

export default App;
