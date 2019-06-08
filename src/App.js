import React from 'react';
import './App.css';
import Contacts from './componets/contacts/Contacts';
import Header from './componets/layout/Header';
import About from './componets/pages/About';
import { Provider } from './context';
import AddContact from './componets/contacts/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <Header branding="Contact Manager" />

                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Contacts} />

                            <Route exact path="/about" component={About} />
                            <Route
                                exact
                                path="/contact/add"
                                component={AddContact}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
