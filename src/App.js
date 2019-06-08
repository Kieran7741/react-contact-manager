import React from 'react';
import './App.css';
import Contacts from './componets/Contacts';
import Header from './componets/Header';
function App() {
    return (
        <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
                <Contacts />
            </div>
        </div>
    );
}

export default App;
