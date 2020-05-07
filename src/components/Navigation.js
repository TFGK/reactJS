import React from "react";
import { Link } from "react-router-dom";
import Aeye from '../components/images/Aeye.png';
//import '../components/css/Navigation.css';

function Navigation(){
  return(
    <div>
      <span className="navbar_opac"></span>
      <div className="aeye_navbar">
       <Link to="/"><img src={Aeye} className="App-logo" alt="logo" /></Link>
        <ul>
          <li key="1">
          <Link to="location">지도정보</Link>
          </li>
          <li key="2">
          <Link to="building">건물정보</Link>
          </li>
          <li key="3">
          <Link to="buy">구매하기</Link>
          </li>
          <li key="4">
          <Link to="qna">건의사항</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;