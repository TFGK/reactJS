import React from "react";
import Aeye_white from './images/Aeye_white.png';
import { Link } from "react-router-dom";
import "./css/Navigation.css";

function Navigation(){
  return(
    <div>
      <span className="navbar_opac"></span>
      <div className="aeye_navbar">
       <Link to="/"><img src={Aeye_white} className="App-logo" alt="logo" /></Link>
        <ul className="aeye_navbar_ul">
          <li className="aeye_navbar_li" key="1">
          <Link to="/location">지도정보</Link>
          </li>
          <li className="aeye_navbar_li" key="2">
          <Link to="/community">커뮤니티</Link>
          </li>
          <li className="aeye_navbar_li" key="3">
          <Link to="/buy">구매하기</Link> 
          </li>
          <li className="aeye_navbar_li" key="4">
          <Link to="/qna">게시판</Link>
          </li>

          {/* Auth */}
          <li className="aeye_navbar_li" key="4">
          <Link to="/login">로그인</Link>
          </li>
          <li className="aeye_navbar_li" key="4">
          <Link to="/register">회원가입</Link>
          </li>


        </ul>
      </div>
    </div>
  );
}
export default Navigation;