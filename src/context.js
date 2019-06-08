// provider component

import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {
    state = {
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

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
