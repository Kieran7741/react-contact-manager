import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
    constructor() {
        super();
        this.state = {
            contacts: [
                {
                    name: 'Kieran',
                    id: 1,
                    email: 'Kieran@gmail.com',
                    phone: '0877957709'
                },
                {
                    name: 'John',
                    id: 2,
                    email: 'John@gmail.com',
                    phone: '0877957709'
                },
                {
                    name: 'Katie',
                    id: 3,
                    email: 'Katie@gmail.com',
                    phone: '0877957709'
                }
            ]
        };
    }
    render() {
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        );
    }
}
