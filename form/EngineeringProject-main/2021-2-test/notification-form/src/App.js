import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Home from './Home';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Route path="/" component={Home} exact/>
        <Route path="/form1" component={Form1}/>
        <Route path="/form2" component={Form2}/>
    </div>
  );
}

export default App;
