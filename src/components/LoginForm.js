import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import $ from "jquery";
import {} from "jquery.cookie";
import './css/Auth.css';

axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class LoginForm extends Component {
    
    join = () => {
        const send_param = {
            headers,
            name: this.joinName.value,
            email: this.joinEmail.value,
            year: this.joinYear.value,
            password: this.joinPw.value,
        };
        axios.post("/members", send_param)
        //정상 수행
        .then(returnData => {
            if(returnData.data.message) {
                alert(returnData.data.message);
            } else {
                alert("회원가입 실패");
            }
        })
        //에러
        .catch(err => {
            console.log(err);
        });
    };

    login = () => {
        const send_param = {
            headers,
            email: this.loginEmail.value,
            password: this.loginPw.value
        };
        axios.post("/members", send_param)
        //정상 수행
        .then(returnData => {
            if(returnData.data.message) {
                //정보노출 위험이 있으니 콘솔 삭제 요망
                console.log("login_id:" + returnData._id);
                $.cookie("login id:", returnData.data. id);
                    //this.setState({
                    //  login_email: returnData.data.name    
                    //})
                alert(returnData.data.message);
                window.location.reload();
            } else {
                alert("로그인 실패");
            }
        })
        //에러
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <Form className="auth_form">
                {/* 회원가입 폼 그룹 */}
                <Form.Group controlId="joinForm">
                    <Form.Label>name</Form.Label>
                    
                    <Form.Control
                        type="text"
                        ref={ref => (this.joinName = ref) }
                        placeholder = "name"
                    />

                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={ref => (this.joinPw = ref) }
                        placeholder = "password"
                    />

                    <Form.Label>Eamil address</Form.Label>
                    <Form.Control
                        type="email"
                        ref={ref => (this.joinEmail = ref) }
                        placeholder = "email"
                    />

                    <Form.Label>생년월일</Form.Label>
                    <Form.Control
                        type="date"
                        ref={ref => (this.joinYear = ref) }
                        placeholder = "date"
                    />

                    <Button className="auth_button" onClick={this.join} variant="primary" type="button" block>
                        회원가입
                    </Button>
                </Form.Group>

                <Form.Group controlId="loginForm">
                    <Form.Label>Eamil address</Form.Label>
                    <Form.Control
                        type="email"
                        ref={ref => (this.loginEmail = ref) }
                        placeholder = "Enter email"
                    />
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        ref={ref => (this.loginPw = ref) }
                        placeholder = "password"
                    />

                    <Button className="auth_button" onClick={this.login} variant="primary" type="button" block>
                        로그인
                    </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default LoginForm;