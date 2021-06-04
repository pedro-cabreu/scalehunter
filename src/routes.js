import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChordFinder from './pages/chordfinder';
import Home from './pages/home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }/> 
                <Route path="/guitar" component={ Home }/> 
                <Route path="/keys" component={ Home }/> 
                <Route path="/chordfinder" component={ ChordFinder }/> 
            </Switch>
        </BrowserRouter>
    );
}