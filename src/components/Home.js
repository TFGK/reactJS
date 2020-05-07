import React from 'react';
import main_img from '../components/images/main_img5.png';
import hw_img from'../components/images/hw-img2.jpg';

import '../components/css/Home.css';

class Home extends React.Component{
  render(){
    return(
      <div className="article">
        <div className="main_img" >
          <p>Youngjin College Grade 3 WDJ Group 1</p>
          <p>This is the web page of Capstone Design Aeye.</p>
          <p>This is where the image & topic will go.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </div>

        <div className="article_hw">
          <div className="hw-img">
            <img src={hw_img} width="100%" height="600px" ></img>
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
            <h1>어플리케이션 사진과 소개가 들어갈 곳입니다.</h1>
          </div>
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
  
