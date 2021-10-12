import React from "react";
import Register from './Register2.js';
import Survey from './Survey.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Route path="/register" component={Register} exact/>
    <Route path="/survey" component={Survey} exact/>
  </div>
  );
}

export default App;
