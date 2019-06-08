import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
    render() {
        const { name, email, phone } = this.props;
        return (
            <div className="card card-body mb-3">
                <h4>Contact: {name}</h4>
                <ul className="list-group">
                    <li className="list-group-item">Eamil: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
};

export default Contact;
