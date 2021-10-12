import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

const Form1 = () => {
  return (
    <div className="Form1">
      <header className="App-header">
      <div class="text-start">■ 주민등록법 시행령[별지 제15호서식] &lt;개정 2016. 12. 30.&gt;</div><br/>
        <h2 class="font-weight-bold">전입 신고서 (세대 모두 이동)</h2>
      </header>
      <br/>
      <body className="form-body">
      <div class="text-start">※ 뒤쪽의 유의사항과 작성방법을 읽고 작성하기 바랍니다.</div>
      <table class="table table-bordered">
        <thead class="table-active ">
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
            <td class="col-md-2 border-start-0 ">전입자<br/>신고인</td>
            <td class="text-start col-md-3">성명
              <div class="text-end">
                (서명 또는 인)
              </div>
            </td>
            <td class="text-start col-md-3">주민등록번호</td>
            <td class="text-start col-md-3 border-end-0">연락처</td>
          </tr>
          <tr>
            <td class="align-middle border-start-0">전에 살던 곳</td>
            <td class="border-end-0 text-start align-middle" colspan="2" ><pre>(시•도)                 (시•군•구)</pre></td>
            <td class="border-start-0 text-start border-end-0" >※ 시•도, 시•군•구까지만 작성<br/>(상세주소는 작성하지 않아도 됩니다.) </td>
          </tr>
          <tr>
            <td class="align-middle border-start-0" rowspan="3">현재 사는 곳<br/>(이사한 곳)</td>
            <td class="text-start" colspan="2">세대주 성명(※ 세대주가 신고할 때에는 작성하지 않습니다.)<pre class="text-end">
              (서명 또는 인)
              </pre></td>
            <td class="text-start border-end-0">연락처</td>
          </tr>
          <tr>
            <td class="text-start border-end-0" colspan="3">주소</td>
          </tr>
          <tr>
            <td class="text-start border-end-0">다가구주택 명칭
              <pre class="text-end">동     층     호</pre>
            </td>
            <td colspan="2" class="border-start-0 border-end-0">※ 구분 동기가 되어 있지 않은 다가구주택인 경우 작성<br/>(예: 무궁화빌라, 1동 1층 2호)</td>
          </tr>
          <tr>
          <td class="align-middle border-start-0">전입 사유<br/>(주된1가지)</td>
              <td class="text-start border-end-0" colspan="5">
                <pre>
                [ ]직업 (취업, 사업, 직장 이전 등)             [ ]교육 (진학, 학업, 자녀 교육 등)<br/>
                [ ]가족 (가족과 함께 거주, 결혼, 분가 등)        [ ]주거 환경(교통, 문화•편의시설 등)<br/>
                [ ]주택 (주택 구입, 계약 만료, 집세, 재개발 등)   [ ]자연 환경 (건강, 공해, 전원생활 등)<br/>
                [ ]그 밖의 사유(                       )
                </pre></td>
          </tr>
          <tr>
              <td class="text-start border-start-0 border-end-0" colspan="6"><br/><span class="h4">읍•면•동장 및 출장소장</span> 귀하<br/><br/></td>
          </tr>
        </tbody>
      </table>

      <table class="table border-top border-dark">
        <thead class="table-active">
          <tr>
            <td>유의사항</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <p>1. 전입신고는 신거주지에 전입한 날부터 14일 이내에 현 거주지에서 해야 하며, 전입신고 내용의 사실 여부는 통장•이장이 사후에 확인하며, 거짓으로 신고한 것이 확인되면 처벌을 받습니다. <br/>
              - 정당한 사유 없이 14일 이내에 신고를 하지 않으면 5만 원 이하의 과태료를 물게 되며, 거짓으로 신고한 경우에는 3년 이하의 징역형 또는 1천만 원 이하의 벌금형을 받게 됩니다. ( 「주민등록법」 제 37조  및 제 40조 )</p>

              <p>2. 거짓 전입 및 무단 전출을 하면 신고한 최종 주소지에 '거주불명 등록' 될 수 있고, '거주불명 등록'후 1년 내에 실제 거주지에 재등록하지 않으면 최종 주소지 관할 읍•면사무소 또는 동 주민센터의 주소를 행정상 관리주소로 하여 거주불명 등록을 할 수 있습니다.
              </p>
              <p>3. 전입 사유 칸은 「통계법」에 따라 인구 이동 통계 작성을 위한 자료로 활용됩니다. 같은 법 제 32조에 따라 성실하게 응답해야 할 의무가 있으며, 같은 법 제33조에 따라 비밀이 보호되고, 전입 사유 칸의 내용은 통계 작성의 목적으로만 사용됩니다. 
              </p>
            </td>
          </tr>
        </tbody>

        <thead class="table-active">
          <tr>
            <td>작성방법</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <p>1. '연락처'는 도로명주소 등 신고인에게 필요한 사항을 알리고 도우려는 목적으로만 이용되니 연락처가 바뀔 때에는 관할 읍•면사무소 또는 동 주민센터에 알려주시기 바라며, 희망하는 사람만 연락처를 쓰기 바랍니다.
              </p>
              <p>2. 전입 주소가 다가구주택인 경우에 '주택 명칭•호수'는 주민등록 관리 등을 위해 필요한 사항으로 원하는 사람만 작성하면 되고, 공법상 주소는 인정되지 않으며, 공무상 필요한 경우 국가나 지방자치단체에 제공될 수 있으며, 이를 작성하지 않아 우편물 등이 송달되지 않는 책임은 본인에게 있습니다.
              ※ 다만, 「도로명주소법」에 의한 상세 주소(동•층•호)가 부여된 경우 공법상 주소로 전입신고 가능합니다. 
              </p>
            </td>
          </tr>
          <tr>
            <td class="text-start">※ 우편물 전입지 전송 서비스를 신청하는 사람만 작성합니다.</td>
          </tr>
        </tbody>

        <thead class="table-active">
          <tr>
            <td class="text-start">우편물 전입지 전송(전입신고 3일 후부터 3개월) 서비스 신청서 및 개인 정보 제공 동의서</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <p>
                이 서비스는 전에 살던 주소지로 배달되던 우편물을 전입신고한 주소로 배달하는 서비스로서 세대주 및 세대원의 개인 정보가 우체국으로 제공되므로 신청인의 동의가 필요합니다.(전입지 전송 서비스 신청 후 새로운 곳으로 다시 전입신고한 경우 기존에 신청한 건은 자동으로 삭제되며, 직전 주소지에서 새로 전입신고한 주소지로만 서비스가 제공됩니다)
                <br/>
                ■ 제공 항목: 동의하는 세대주 및 세대원의 성명, 주소, 전화번호(휴대전화 번호)
                <br/>
                <pre>
                ○ 우편물 전송을 받으려 하는 세대주 및 세대원 성명 작성:<br/>
                ○ 신청인 전화번호: ☏     -     -     (휴대전화:     -     -     )</pre>
                <br/>
                [ ] 위의 사항을 확인하였고 정보 제공에 동의합니다.
              </p>
              <pre class="text-end">신청인                     (서명 또는 인)</pre>
            </td>
          </tr>
        </tbody>

      </table>
        
      </body>
    </div>
  );
};

export default Form1;
