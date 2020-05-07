import React, { Component } from 'react';
import axios from 'axios';

import './css/location.css';

import Location_form from './Location_form';
import Location_list from './Location_list';
import Loader from './Loader';

export default class Location extends Component {
    state = {
        location_datas: [],
        location_data: {},
        loader : false,
        url: 'http://localhost:81/React/public/api/locations'
    };

    componentDidMount() {
        this.getDatas();
    };

    // 생성
    createDatas = async data => {
        this.setState({ loader: true });

        await axios.post(this.state.url, {
            location_name: data.location_name,
            location_explain: data.location_explain,
            location_lat: data.location_lat,
            location_lng: data.location_lng,
        });

        this.getDatas();
    };
    
    // 조회
    getDatas = async() => {
        this.setState({ loader: true });
        const location_datas = await axios.get(this.state.url);
        this.setState({ location_datas: location_datas.data, loader: false });
        console.log(location_datas);
    };

    editDatas = async data => {
        // clear datas obj
        this.setState({ location_data: {}, loader: true });

        await axios.put(`${this.state.url}/${data.id}`, {
            location_name: data.location_name,
            location_explain: data.location_explain,
            location_lat: data.location_lat,
            location_lng: data.location_lng,
        });
        this.getDatas();
    };

    //삭제
    deleteDatas = async id => {
        this.setState({ loader: true });
        await axios.delete(`${this.state.url}/${id}`);

        this.getDatas();
    };

    onFormSubmit = data => {
        //console.log('location', data);
        if(data.isEdit) {
            //is edit true
            this.editDatas(data);
        } else {
            //is eidt false
            this.createDatas(data);
        }
    };

    onDelete = id => {
        //console.log('location', id);
        this.deleteDatas(id);
    }

    onEdit = data => {
        //console.log('location', data);
        this.setState({ location_data: data });

    }

    render() {
        return (
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            React js CRUD with Laravel API
                        </a>
                    </div>
                </div>

                <div className="ui main container">
                    <Location_form 
                    location_data={this.state.location_data}
                    onFormSubmit={this.onFormSubmit}
                    />
                    
                    {this.state.loader ? <Loader /> : ""}

                    <Location_list
                        location_datas={this.state.location_datas}
                        onDelete={this.onDelete}
                        onEdit={this.onEdit}
                    />
                </div>
            </div>
        );
    }
}

