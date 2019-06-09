import React from 'react';
import './App.css';
import Contacts from './componets/contacts/Contacts';
import Header from './componets/layout/Header';
import About from './componets/pages/About';
import { Provider } from './context';
import AddContact from './componets/contacts/AddContact';
import EditContact from './componets/contacts/EditContact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Test from './componets/test/Test';
import NotFound from './componets/pages/NotFound';
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
                            <Route
                                exact
                                path="/contact/edit/:id"
                                component={EditContact}
                            />
                            <Route exact path="/test" component={Test} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
