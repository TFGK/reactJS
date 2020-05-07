import React, { Component } from "react";


export default class Location_form extends Component {
    state = {
        form: {location_name: "",
               location_explain: "",
               location_lat: "", 
               location_lng: "",
               isEdit : false
            },
        btnName: "Save",
        btnClass: "ui primary button submit-button"
    };

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    };

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props && !this.isEmpty(this.props.location_data)) {
            this.setState({
                form: { ...this.props.location_data, isEdit: true },
                btnName: "Update",
                btnClass: "ui orange button submit-button"

            })
            //console.log("update");
        }
    };

    onFormSubmit = event => {
        // prevent form submit
        event.preventDefault();

        if(this.formValidation() ) {
            // send form data to location
            this.props.onFormSubmit(this.state.form);
        };

        // change the button to save 
        this.setState({
            btnName: "Save",
            btnClass: "ui primary button submit-button"
        });

        // clear form Fields
        this.clearFormFields();
    };

    //폼태그 유효성 검사 함수
    formValidation = () => {
        // location name
        if(document.getElementsByName("location_name")[0].value === "") {
            alert("Enter location name");
            return false;
        }

        // location explain
        if(document.getElementsByName("location_explain")[0].value === "") {
            alert("Enter location explain");
            return false;
        }

        // location lat
        if(document.getElementsByName("location_lat")[0].value === "") {
            alert("Enter location lat");
            return false;
        }

        // location lng
        if(document.getElementsByName("location_lng")[0].value === "") {
            alert("Enter location lng");
            return false;
        }
        return true;
    };

    clearFormFields = () => {
        // change form state
        this.setState({
            form: {location_name: "",
               location_explain: "",
               location_lat: "", 
               location_lng: "",
               isEdit : false
            }
        });

        //clear form fields
        document.querySelector(".form").reset();
    };

    //eidt 버튼 눌렀을 때 저장되어있는 data form태그에 불러오는 함수
    handleChange = event => {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    };

    render() {
        return (
        <form className="ui form">
            <div className="fields">
                <div className="five wide field">
                    <label>Location Name</label>
                    <input
                        type="text"
                        name="location_name"
                        placeholder="location_name"
                        onChange={this.handleChange}
                        value={this.state.form.location_name}
                    />
                </div>

                <div className="five wide field">
                    <label>Location explain</label>
                    <input 
                        type="text" 
                        name="location_explain" 
                        placeholder="location_explain"
                        onChange={this.handleChange}
                        value={this.state.form.location_explain}
                    />
                </div>

                <div className="five wide field">
                    <label>Location lat</label>
                    <input 
                        type="text" 
                        name="location_lat" 
                        placeholder="location_lat" 
                        onChange={this.handleChange}
                        value={this.state.form.location_lat}
                    />
                </div>

                <div className="five wide field">
                    <label>Location lng</label>
                    <input 
                        type="text" 
                        name="location_lng" 
                        placeholder="location_lng" 
                        onChange={this.handleChange}
                        value={this.state.form.location_lng}
                    />
                </div>
                
                <div className="five wide field">
                    <button className={this.state.btnClass} onClick={this.onFormSubmit}>
                        {this.state.btnName}
                    </button>
                </div>
            </div>
        </form>
        );
    }
}
