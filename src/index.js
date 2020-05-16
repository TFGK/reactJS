import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './components/css/index.css';
//import "bootstrap/dist/css/bootstrap.min.css";

// 실질적으로 사용할 컴포넌트 불러오기
import Home from './components/Home';
import Footer from './components/Footer';
import Buy from './components/Buy';
import Location from './components/location/Location';
import QnA from './components/qna/QnA';
import Navigation from "./components/Navigation";
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Auth/Navbar';
import Landing from './components/Auth/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Auth/Profile';



export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                {/* <Navigation /> */}
                <Navbar />
                    <div className="route">
                        {/* <Route path="/" exact component={Home} /> */}
                        <Route exact path="/" component={Landing} />
                        <Route path="/location" exact component={Location}/>
                        {/* <Route path="/community" exact component={Location}/> */}
                        <Route path="/buy" component={Buy}/>
                        <Route path="/qna" exact component={QnA}/>
                    </div>
                    <div className="Auth">
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.querySelector('#root'));
serviceWorker.unregister();



