import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

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
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={this.onformChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={this.onformChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control form-control-lg"
                                            placeholder="Enter phone"
                                            value={phone}
                                            onChange={this.onformChange}
                                        />
                                    </div>
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
