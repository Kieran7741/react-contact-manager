import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };
    // An onChange listener is needed to update the state when the
    // user inputs values into the form due to the form being a controlled component

    onformChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = (dispatch, event) => {
        event.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = {
            id: uuid(),
            name: name,
            email: email,
            phone: phone
        };
        dispatch({ type: 'ADD_CONTACT', payload: newContact });
        this.setState({
            name: '',
            email: '',
            phone: ''
        });
    };
    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add contact</div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onSubmit.bind(
                                        this,
                                        dispatch
                                    )}
                                >
                                    <TextInputGroup
                                        name="name"
                                        label="Name"
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={this.onformChange}
                                    />
                                    <TextInputGroup
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onformChange}
                                    />
                                    <TextInputGroup
                                        name="phone"
                                        label="Phone"
                                        placeholder="Enter number"
                                        value={phone}
                                        onChange={this.onformChange}
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contant"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
