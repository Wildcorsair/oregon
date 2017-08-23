/****************************************
 * Working with forms in the React
 * Submit, change events and ref example
 ***************************************/

import React, { Component } from 'react';
import './css/registration-form.css';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('Form was submitted. Email is:', this.state.email);
        console.log('Get value through REF:', this.testInput.value);
        // Submit form
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    render() {
        return (
            <form id="registration-form" onSubmit={this.handleSubmit}>
                <input type="text" name="user_name" ref={(input) => this.testInput = input}/>
                <input
                    type="text"
                    name="email"
                    placeholder="E-Mail"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                />
                <button className="submit-form-btn">Save</button>
            </form>
        );
    }
}

export default RegistrationForm;
