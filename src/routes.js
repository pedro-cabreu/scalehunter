import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './pages/about';
import ChordFinder from './pages/chordfinder';
import Download from './pages/download';
import Home from './pages/home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }/> 
                <Route path="/guitar" component={ Home }/> 
                <Route path="/keys" component={ Home }/> 
                <Route path="/chords" component={ ChordFinder }/> 
                <Route path="/chordfinder" component={ ChordFinder }/> 
                <Route path="/download" component={ Download }/> 
                <Route path="/about" component={ About }/> 
            </Switch>
        </BrowserRouter>
    );
}