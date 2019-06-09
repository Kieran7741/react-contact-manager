import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
    // Note you do not need to bind 'this' when using an arrow function
    state = {
        showContactInfo: false
    };
    onShowClick = event => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };
    onDeleteClick = (id, dispatch) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
    };
    render() {
        const { name, email, phone, id } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                Contact: {name}{' '}
                                <i
                                    onClick={this.onShowClick}
                                    className="fas fa-caret-down"
                                    style={{ cursor: 'pointer' }}
                                />
                                <i
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        id,
                                        dispatch
                                    )}
                                    className="fas fa-trash-alt"
                                    style={{
                                        cursor: 'pointer',
                                        float: 'right',
                                        color: 'red'
                                    }}
                                />
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Eamil: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
