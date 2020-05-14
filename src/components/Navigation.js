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
          <Link to="location">지도정보</Link>
          </li>
          <li className="aeye_navbar_li" key="2">
          <Link to="building">건물정보</Link>
          </li>
          <li className="aeye_navbar_li" key="3">
          <Link to="buy">구매하기</Link> 
          </li>
          <li className="aeye_navbar_li" key="4">
          게시판
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navigation;