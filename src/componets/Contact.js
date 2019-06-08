import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
    // Note you do not need to bind 'this' when using an arrow function
    state = {
        showContactInfo: false
    };
    onShowClick = event => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };
    onDeleteClick = () => {
        this.props.deleteClickHandler();
        console.log('Delete pressed');
    };
    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;
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
                        onClick={this.onDeleteClick}
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
                        <li className="list-group-item">Eamil: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
