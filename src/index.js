import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/Welcome';
import UserList from './components/UserList';
import RegistrationForm from './components/RegistrationForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Welcome />, document.getElementById('header'));
ReactDOM.render(<UserList />, document.getElementById('user-list'));
ReactDOM.render(<RegistrationForm />, document.getElementById('contact-form'));
registerServiceWorker();
