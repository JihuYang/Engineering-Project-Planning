import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

const Form2 = () => {
  return (
    <div className="Form2">
      <header className="App-header">
      <div class="text-start">■ 주민등록법 시행령[별지 제15호의 2서식] &lt;개정 2016. 12. 30.&gt;</div><br/>
        <h2>[ ] 전입(세대 일부 이동, 편입, 합가, 위임용) [ ] 재등록신고서</h2>
      </header>
      <br/>
      <body className="form-body">
      <div class="text-start">※ 뒤쪽의 유의사항과 작성방법을 읽고 작성하기 바랍니다.</div>
      <table class="table table-bordered">
        <thead class="table-active">
          <tr>
            <td class="col-md-1 align-top text-start pb-0">접수번호</td>
            <td class="col-md-1 text-start pb-0">신고일
            <pre class="text-end mb-1">년    월    일     </pre></td>
          </tr>
        </thead>
      </table>
      <table class="table table-bordered mb-0">
        <tbody>
          <tr>
            <td class="align-middle" rowspan="3">전에 살던 곳</td>
            <td>구분</td>
            <td class="text-start" colspan="4">[ ]세대 모두 이동 [ ]세대주 포함 일부 이동 [ ]세대주 미포함 일부 이동</td>
          </tr>
          <tr>
            <td class="align-middle">세대주</td>
            <td class="text-start col-md-2">성명</td>
            <td class="text-start col-md-2">주민등록번호</td>
            <td class="col-md-2">남은 세대의<br/> 세대주 성명<br/>(연락처)</td>
            <td class="col-md-3"></td>
          </tr>
          <tr>
            <td>주소<br/>(행정상 <br/>관리 주소)</td>
            <td class="text-start align-middle"colspan="4"><pre>(시 • 도)          (시 • 군 • 구)            ※ 시•도, 시•군•구까지만 작성</pre></td>
          </tr>

          <tr>
            <td class="align-middle col-md-3" rowspan="4">현재 사는 곳<br/>(이사한 곳)</td>
            <td class="col-md-2">구분</td>
            <td class="text-start" colspan="4">[ ]세대 모두 이동 [ ]세대주 포함 일부 이동 [ ]세대주 미포함 일부 이동</td>
          </tr>
          <tr>
            <td>세대주</td>
            <td class="text-start" colspan="2">성명</td>
            <td class="text-start" colspan="2">연락처</td>
          </tr>
          <tr>
            <td>주소</td>
            <td colspan="4"></td>
          </tr>
          <tr>
            <td class="text-start col-md-3  border-end-0" colspan="3">다가구주택 명칭
              <pre class="text-end">
              동      층      호
              </pre>
            </td>
            <td class="text-start border-start-0" colspan="2">※ 구분 동기가 되어 있지 않은 다가구주택인 경우 작성 <br/>(예: 무궁화빌라, 1동 1층 2호)</td>
          </tr>

          <tr>
            <td  class="text-start" colspan="6"><pre class="m-0 p-0">* 신고 대상자 (총   명)</pre></td>
          </tr>

        </tbody>
      </table>

      <table class="table table-bordered">
        <tbody>
        <tr>
            <td class="col-md-2">전입자<br/>(재등록자)</td>
            <td class="col-md-1">새대주와의 관계</td>
            <td>성명</td>
            <td class="col-md-2">전입자<br/>(재등록자)</td>
            <td class="col-md-1">새대주와의 관계</td>
            <td>성명</td>
          </tr>
      
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td>5</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td>6</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td>7</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td></td>
            <td></td>
            <td>8</td>
            <td></td>
            <td></td>
          </tr>




            <tr>
              <td class="align-middle"rowspan="4">전입자,<br/>전 세대주 확인</td>
              <td class="text-start" colspan="5">※ 전입자가 아닌 사람이 신고하는 경우에만 작성합니다.</td>
            </tr>
            <tr>
              <td>전입자(대표자)</td>
              <td colspan="4" class="text-start"><pre>성명               (서명 또는 인) 주민등록번호</pre></td>
            </tr>
            <tr>
              <td class="text-start" colspan="5">※ 세대주가 변경되는 경우 또는 미성년자를 전입신고 하는 경우에만 작성합니다.</td>
            </tr>
            <tr>
              <td class="align-middle">전(前) 세대주</td>
              <td class="align-middle text-start" colspan="4"><pre>성명               (서명 또는 인)</pre></td>
            </tr>




            <tr>
              <td class="align-middle">전입 사유<br/>(주된1가지)</td>
              <td class="text-start" colspan="5">
                <pre>
                [ ]직업 (취업, 사업, 직장 이전 등)             [ ]교육 (진학, 학업, 자녀 교육 등)<br/>
                [ ]가족 (가족과 함께 거주, 결혼, 분가 등)        [ ]주거 환경(교통, 문화•편의시설 등)<br/>
                [ ]주택 (주택 구입, 계약 만료, 집세, 재개발 등)   [ ]자연 환경 (건강, 공해, 전원생활 등)<br/>
                [ ]그 밖의 사유(                       )
                </pre></td>
            </tr>
            <tr>
              <td class="text-start" colspan="6">「주민등록법」 제6조1항, 제16조 제1항과 같은 법 시행령 제23조 제1항, 제32조 제1항 및 제32조의 2제1항에 따라([ ]전입 [ ]재등록) 신고를 합니다.<pre class="text-end m-0">
                년    월    일</pre></td>
            </tr>

            <tr>
              <td class="align-middle" rowspan="2">신고인</td>
              <td class="text-start" colspan="2">성명</td>
              <td class="text-start"  colspan="3">주민등록번호</td>
            </tr>
            <tr>
              <td class="text-start"  colspan="2">연락처</td>
              <td class="text-start"  colspan="3">세대주와의 관계</td>
            </tr>
            <tr>
              <td class="text-start " colspan="6"><br/><span class="h4">읍•면•동장 및 출장소장</span> 귀하<br/><br/></td>
            </tr>
        </tbody>
      </table>
        
      </body>
    </div>
  );
};

export default Form2;
