import React, { Component } from 'react'
import Home from './home'
import { BrowserRouter as Router, Route, BrowserRouter, } from "react-router-dom";
import { Iframe } from './iframe';
import {Search} from './search';

export default class index extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/home">
                    <Home />
                    </Route>
                    <Route path="/iframe/:id">
                    <Iframe />
                    </Route>
                    <Route path="/search/:id" children={<Search />} >
                        <Search />
                    </ Route >
                </BrowserRouter>
            </div>
        )
    }
}
