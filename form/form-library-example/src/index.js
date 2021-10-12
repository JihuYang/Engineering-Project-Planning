import React, { Component, PureComponent } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import get from "lodash/get";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

import "bootstrap/dist/css/bootstrap.min.css";

<script src="https://unpkg.com/@rjsf/core/dist/react-jsonschema-form.js"></script>

const schema = {
  type: "array",
  items: {
    type: "string"
  }
};

const uiSchema = {
  items: {
    "ui:widget": "textarea"
  }
};
const CustomCheckbox = function(props) {
  return (
    <button id="custom">
        {String(props.value)}
    </button>
  );
};

const log = type => console.log.bind(console, type);

render(
  <Form
    schema={schema}
    onChange={log("changed")}
    onSubmit={log("submitted")}
    onError={log("errors")}
    uiSchema={uiSchema}
  />,
  document.getElementById("root")
);
