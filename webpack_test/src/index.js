// import './css/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import App from './app';
import Home from './home';
import TV from './tv';
import Shows from './shows';

ReactDOM.render((
    <Router>
        <Route path="/" component={App} />
        <Redirect from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/tv" component={TV} />  
        <Route path="/tv/shows/:id/:name" component={Shows} />
    </Router>
    
), document.getElementById('root'));