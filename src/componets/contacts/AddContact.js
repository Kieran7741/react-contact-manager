import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

export default class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
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
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Phone is required' } });
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }
        const newContact = {
            name: name,
            email: email,
            phone: phone
        };
        axios
            .post('https://jsonplaceholder.typicode.com/users/', newContact)
            .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.data }));
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };
    render() {
        const { name, email, phone, errors } = this.state;

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
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        name="email"
                                        label="Email"
                                        type="email"
                                        placeholder="Enter Email"
                                        value={email}
                                        onChange={this.onformChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        name="phone"
                                        label="Phone"
                                        placeholder="Enter number"
                                        value={phone}
                                        onChange={this.onformChange}
                                        error={errors.phone}
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
