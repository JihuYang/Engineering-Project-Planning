import logo from './logo.svg';
import GetLocalPosts from './components/LocalPosts/GetLocalPosts';
import GetOnlinePosts from './components/OnlinePosts/GetOnlinePosts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.addFamily = this.addFamily.bind(this);
  }
  addFamily() {
    var para = document.createElement("div");
    para.innerHTML = document.getElementById("family-input").innerHTML;
    document.getElementById("family").appendChild(para);
  }
  render() {
    return (
      <div className="App">
        <div class="container-fluid w-500 mt-5">
          <h3>Local Storage에서 불러온 정보</h3>
          <div class="row m-3 h-200">
            <div class="col glenda-5-hex">
              <div class="my-2">기본정보</div>
              <GetLocalPosts />
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <h3>External API</h3>
          <GetOnlinePosts />
        </div>



      </div>
    );
  }
}

export default App;