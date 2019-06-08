import React from 'react';
import './App.css';
import Contacts from './componets/Contacts';
import Header from './componets/Header';
import { Provider } from './context';
function App() {
    return (
        <Provider>
            <div className="App">
                <Header branding="Contact Manager" />
                <div className="container">
                    <Contacts />
                </div>
            </div>
        </Provider>
    );
}

export default App;
