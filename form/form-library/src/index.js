import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import JSONSchemaForm from "@rjsf/core";

const Form = JSONSchemaForm.default;

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const log = (type) => console.log.bind(console, type);

// ReactDOM.render((
//   <Form schema={schema}
//         onChange={log("changed")}
//         onSubmit={log("submitted")}
//         onError={log("errors")} />
// ), document.getElementById('root'));

ReactDOM.render(
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
