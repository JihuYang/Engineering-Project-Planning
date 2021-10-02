import React, { Component } from 'react';


class Home extends React.Component {
  render() {
    return(
      <div className="App">
      <div class="container-fluid ">
        <div class="row m-3 h-200 ">
          <div class="col glenda-1-hex d-flex align-items-center justify-content-center"> 
            기본정보
          </div>
        </div>
        <div class="row m-3 h-200">
        <div class="col glenda-2-hex d-flex align-items-center justify-content-center"> 
            학력정보
          </div>
        </div>
        <div class="row m-3 h-200">
        <div class="col glenda-3-hex d-flex align-items-center justify-content-center"> 
            경력정보
          </div>
        </div>
        <div class="row m-3 h-200">
        <div class="col glenda-4-hex d-flex align-items-center justify-content-center"> 
            자격증정보
          </div>
        </div>
      </div>  
    </div>
    )
  }
}

export default Home