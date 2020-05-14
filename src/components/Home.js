import React, { useState, useEffect, useRef }  from 'react';
import SimpleSlider from 'infinite-react-carousel';

import main_img from './images/main_img5.png';
import google from './images/app_google.png';
import hw_img from'./images/hw-img2.jpg';
import default_img from './images/default-image.jpg';

import ocr_icon from './images/ocr_icon3.svg';
import navigation_icon from './images/navigation_icon.svg'
import color_icon from './images/color_icon2.svg'
import light_icon from './images/light_icon2.svg'
import zoom_icon from './images/zoom_icon.svg';

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";


import Slider from "./Slider";

import './css/Home.css';
// import './modules.css';



class Home extends React.Component{
  
  render(){
    const settings =  {
      // arrows: false,
      arrowsBlock: false,
      // autoplay: true,
      // autoplaySpeed: 2000,
      centerMode: true,
      centerPadding: 300,
      // duration: 300,
      // shift: 20,
      slidesPerRow: 1
    };
    return(
      <div className="article">
        {/* <span className="opacity"></span> */}
        {/* <img src={main_img} className="main_img" /> */}
        <div className="main_img" >
          <p>AEYE</p>
          <p>This is the web page of Capstone Design Aeye.</p>
          <p>This is where the image & topic will go.</p>
          <img src={google} className="google_button"></img>
        </div>

        {/* <div class="mainbar">
            <a href=".hw-part" >제품소개</a>
            <a href=".app-part">앱 정보</a>
            <a href=".guide-part" >가이드 영상</a>
        </div>
        */}

        <div className="article_hw">
          <div className="hw-img">
            <img src={default_img} width="100%" height="600px" ></img>
          </div>
          <div className="hw-article">
          <h2>제품소개</h2><br/>
          영진전문대학<br/>
          WDJ 1조의 캡스톤프로젝트<br/>
          Aeye입니다 <br/>
          </div>
        </div>

        <div className="article_app">
          <div className="app_spec">
            <br/>
            <h1>앱 소개</h1>
          </div>
        </div>

        <div className="introduce_app_section">
          <div><h1>앱 기능</h1></div>
          <div className="introduce_app">          
            <div className="introduce_app_article">
              <img className="app_article_img" src={navigation_icon} alt=""/>
              <p className="role_name">길 찾기</p>
            </div>
            <div className="introduce_app_article">
              <img className="app_article_img" src={ocr_icon} alt="" />
              <p className="role_name">문자 인식</p>              
            </div>
            <div className="introduce_app_article">
              <img className="app_article_img" src={color_icon} alt="" />
              <p className="role_name">색상 인식</p>              
            </div>
            <div className="introduce_app_article">
              <img className="app_article_img" src={light_icon} alt="" />
              <p className="role_name">빛 밝기</p>
            </div>
            <div className="introduce_app_article">
              <img className="app_article_img" src={zoom_icon} alt="" />
              <p className="role_name">돋보기 기능</p>
            </div>
          </div>
        </div>

        {/* <div className="app_slide">
          <Slider></Slider>
        </div> */}

        <div className="app_slide2">
        <span>앱 기능</span>
        <SimpleSlider { ...settings }>
          <div className="app_slide_img">
            <img className="img2" src={img1} alt="" />
          </div>
          <div className="app_slide_img">
            <img className="img2" src={default_img} alt="" />
          </div>
          <div className="app_slide_img">
            <img className="img2" src={default_img} alt="" />
          </div>
          <div className="app_slide_img">
           <img className="img2" src={default_img} alt="" />
          </div>
          <div className="app_slide_img">
            <img className="img2" src={default_img} alt="" />
          </div>
        </SimpleSlider>
        </div>
        
        <div className="article_video">
          <div className="videobox">
          <h1 className="video-h1">가이드 영상</h1>
          <div className="video-content">
          <iframe width="100%" height="400" src="https://www.youtube.com/embed/PQEfodbDODg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Home;