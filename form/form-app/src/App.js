import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './home';


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
        <div class="container-fluid w-500">
          <div class="row m-3 h-200 ">
            <div class="col glenda-1-hex d-flex align-items-center justify-content-center">
              기본
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
        {/* 데이터 많을 때 */}
        <hr class="m-5"></hr>
        <div class="container-fluid w-500">
          <div class="row m-3 h-200">
            <div class="col glenda-1-hex d-flex align-items-center justify-content-center">
              기본
          </div>
            <div class="col glenda-2-hex d-flex align-items-center justify-content-center">
              신체
          </div>
          </div>
          <div class="row m-3 h-200">
            <div class="col glenda-3-hex d-flex align-items-center justify-content-center">
              학력정보
          </div>
          </div>
          <div class="row m-3 h-200">
            <div class="col glenda-4-hex d-flex align-items-center justify-content-center">
              경력정보
          </div>
          </div>
          <div class="row m-3 h-400">
            <div class="col glenda-5-hex d-flex align-items-center justify-content-center">
              연구/프로젝트
          </div>
          </div>
          <div class="row m-3 h-200 ">
            <div class="col glenda-1-hex d-flex align-items-center justify-content-center">
              특기
          </div>
            <div class="col glenda-2-hex d-flex align-items-center justify-content-center">
              취미
          </div>
          </div>
          <div class="row m-3 h-200">
            <div class="col glenda-3-hex d-flex align-items-center justify-content-center">
              가족사항
          </div>
          </div>
        </div>
        {/* input 넣었을때 */}
        <hr class="m-5"></hr>
        <div class="container-fluid w-500">
          <div class="row m-3 h-auto">
            <div class="col glenda-1-hex">
              <div class="my-2">기본</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">이름</span>
                </div>
                <input type="text" aria-label="firstname" placeholder="성" class="form-control"></input>
                <input type="text" aria-label="lastname" placeholder="이름" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">생년월일</span>
                </div>
                <input type="date" aria-label="birth" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">주소</span>
                </div>
                <input type="text" aria-label="address" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">연락처</span>
                </div>
                <input type="phone" aria-label="phone" class="form-control"></input>
              </div>
            </div>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-2-hex">
              <div class="my-2">학력</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">졸업년월</span>
                </div>
                <input type="date" aria-label="graduate" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">학교명</span>
                </div>
                <input type="text" aria-label="school" class="form-control"></input>
              </div>
              <div class="input-group my-2 ">
                <div class="input-group-prepend w-25">
                  <label class="input-group-text" for="inputGroupSelect01">전공</label>
                </div>
                <select class="custom-select w-75" id="inputGroupSelect01" >
                  <option selected>Choose...</option>
                  <option value="1">전산전자공학부</option>
                  <option value="2">국제어문학부</option>
                  <option value="3">기계제어공학부</option>
                </select>
              </div>
            </div>
          </div>
          <div class="text-end m-3">
            <button type="button" class="btn btn-outline-secondary add-btn">추가</button>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-3-hex">
              <div class="my-2">경력</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">기간</span>
                </div>
                <input type="date" aria-label="startwork" class="form-control"></input>
                <input type="date" aria-label="endwork" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">근무처</span>
                </div>
                <input type="text" aria-label="company" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">직책</span>
                </div>
                <input type="text" aria-label="position" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">업무내용</span>
                </div>
                <input type="text" aria-label="work" class="form-control"></input>
              </div>
            </div>
          </div>
          <div class="text-end m-3">
            <button type="button" class="btn btn-outline-secondary add-btn">추가</button>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-4-hex">
              <div class="my-2">자격증</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">취득년월</span>
                </div>
                <input type="date" aria-label="certificate-date" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">자격증</span>
                </div>
                <input type="text" aria-label="certificate" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">직책</span>
                </div>
                <input type="text" aria-label="position" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">시행처</span>
                </div>
                <input type="text" aria-label="establishment" class="form-control"></input>
              </div>
            </div>
          </div>
          <div class="text-end m-3">
            <button type="button" class="btn btn-outline-secondary add-btn">추가</button>
          </div>
        </div>
        {/* input 데이터 많을 때 */}
        <hr class="m-5"></hr>
        <div class="container-fluid w-800">
          <div class="row m-3 h-auto">
            <div class="col glenda-1-hex">
              <div class="my-2">기본</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">이름</span>
                </div>
                <input type="text" aria-label="firstname" placeholder="성" class="form-control"></input>
                <input type="text" aria-label="lastname" placeholder="이름" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">생년월일</span>
                </div>
                <input type="date" aria-label="birth" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">주소</span>
                </div>
                <input type="text" aria-label="address" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">연락처</span>
                </div>
                <input type="phone" aria-label="phone" class="form-control"></input>
              </div>
            </div>
            <div class="col glenda-2-hex">
              <div class="my-2">신체</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">키</span>
                </div>
                <input type="int" aria-label="height" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">몸무게</span>
                </div>
                <input type="int" aria-label="weight" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">질병</span>
                </div>
                <input type="text" aria-label="ache" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">기타사항</span>
                </div>
                <input type="text" aria-label="etc" class="form-control"></input>
              </div>
            </div>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-3-hex">
              <div class="my-2">학력</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">졸업년월</span>
                </div>
                <input type="date" aria-label="graduate" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">학교명</span>
                </div>
                <input type="text" aria-label="school" class="form-control"></input>
              </div>
              <div class="input-group my-2 ">
                <div class="input-group-prepend w-25">
                  <label class="input-group-text" for="inputGroupSelect01">전공</label>
                </div>
                <select class="custom-select w-75" id="inputGroupSelect01" >
                  <option selected>Choose...</option>
                  <option value="1">전산전자공학부</option>
                  <option value="2">국제어문학부</option>
                  <option value="3">기계제어공학부</option>
                </select>
              </div>
            </div>
          </div>
          <div class="text-end m-3">
            <button type="button" class="btn btn-outline-secondary add-btn">추가</button>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-4-hex">
              <div class="my-2">경력</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">기간</span>
                </div>
                <input type="date" aria-label="startwork" class="form-control"></input>
                <input type="date" aria-label="endwork" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">근무처</span>
                </div>
                <input type="text" aria-label="company" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">직책</span>
                </div>
                <input type="text" aria-label="position" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">업무내용</span>
                </div>
                <input type="text" aria-label="work" class="form-control"></input>
              </div>
            </div>
          </div>
          <div class="text-end m-3">
            <button type="button" class="btn btn-outline-secondary add-btn">추가</button>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-5-hex">
              <div class="my-2">연구/프로젝트</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">기간</span>
                </div>
                <input type="date" aria-label="project-start" class="form-control"></input>
                <input type="date" aria-label="project-end" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">프로젝트명</span>
                </div>
                <input type="text" aria-label="project-name" class="form-control"></input>
              </div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">내용</span>
                </div>
                <input type="text" aria-label="project" class="form-control"></input>
              </div>
            </div>
          </div>
          <div class="text-end m-3">
            <button type="button" class="btn btn-outline-secondary add-btn">추가</button>
          </div>
          <div class="row m-3 h-auto">
            <div class="col glenda-1-hex">
              <div class="my-2">특기</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">특기</span>
                </div>
                <input type="text" aria-label="skill" class="form-control"></input>
              </div>
            </div>
            <div class="col glenda-2-hex">
              <div class="my-2">취미</div>
              <div class="input-group my-2">
                <div class="input-group-prepend w-25">
                  <span class="input-group-text">키</span>
                </div>
                <input type="text" aria-label="hobby" class="form-control"></input>
              </div>
            </div>
          </div>
          <div id="family">
            <div id="family-input">
              <div class="row m-3 h-auto">
                <div class="col glenda-3-hex">
                  <div class="my-2">가족사항</div>
                  <div class="input-group my-2">
                    <div class="input-group-prepend w-25">
                      <span class="input-group-text">관계</span>
                    </div>
                    <input type="date" aria-label="family" class="form-control"></input>
                  </div>
                  <div class="input-group my-2">
                    <div class="input-group-prepend w-25">
                      <span class="input-group-text">성명</span>
                    </div>
                    <input type="text" aria-label="family-name" class="form-control"></input>
                  </div>
                  <div class="input-group my-2">
                    <div class="input-group-prepend w-25">
                      <span class="input-group-text">나이</span>
                    </div>
                    <input type="text" aria-label="family-age" class="form-control"></input>
                  </div>
                  <div class="input-group my-2">
                    <div class="input-group-prepend w-25">
                      <span class="input-group-text">학력</span>
                    </div>
                    <input type="text" aria-label="family-school" class="form-control"></input>
                  </div>
                  <div class="input-group my-2">
                    <div class="input-group-prepend w-25">
                      <span class="input-group-text">직업</span>
                    </div>
                    <input type="text" aria-label="family-job" class="form-control"></input>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="text-end m-3 pb-5">
              <button type="button" class="btn btn-outline-secondary add-btn" onClick={this.addFamily}>추가</button>
            </div>
        </div>
      </div>

    );
  }
}

export default App;