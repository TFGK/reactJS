import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './components/css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";


// 실질적으로 사용할 컴포넌트 불러오기
import Home from './components/Home';
import Footer from './components/Footer';
import Building from './components/Building';
import Buy from './components/Buy';
import Location from './components/location/Location';
import QnA from './components/qna/QnA';
import Navigation from "./components/Navigation";
import LoginForm from './components/LoginForm';
import * as serviceWorker from './serviceWorker';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                <Navigation />
                    <div className="route">
                        <Route path="/" exact component={Home} />
                        <Route path="/location" exact component={Location}/>
                        <Route path="/building" component={Building}/>
                        <Route path="/buy" component={Buy}/>
                        <Route path="/qna" exact component={QnA}/>
                        <Route path="/login" exact component={LoginForm}/>
                    </div>
                </Router>
                
            </div>
        );
    }
}
ReactDOM.render(<Index />, document.querySelector('#root'));
serviceWorker.unregister();



