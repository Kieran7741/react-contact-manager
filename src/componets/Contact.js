import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
    // Note you do not need to bind 'this' when using an arrow function
    onShowClick = event => {
        console.log(event.target);
    };
    render() {
        const { name, email, phone } = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>
                    Contact: {name}{' '}
                    <i
                        onClick={this.onShowClick}
                        className="fas fa-caret-down"
                    />
                </h4>
                <ul className="list-group">
                    <li className="list-group-item">Eamil: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
