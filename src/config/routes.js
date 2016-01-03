import React from 'react';
import Main from '../app/components/main.jsx';
import Hi from '../app/components/hi.jsx';
import Profile from '../app/components/profile.jsx';
import ReactRouter from 'react-router';
import {Route,IndexRoute} from 'react-router';


export default (
    <Route path="/" component={Main}>
        <Route path="/profile/:username" component={Profile}/>

        <IndexRoute component={Hi}/>
    </Route>
)