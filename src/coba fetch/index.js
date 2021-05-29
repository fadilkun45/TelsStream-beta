import React, { Component } from 'react'
import Home from './home'
import { BrowserRouter as useLocation,Router, Route, BrowserRouter, Redirect, useRouteMatch, } from "react-router-dom";
import { Iframe } from './iframe';
import {Search} from './search';

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: '?url='
        }
    }


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
                    <Route  path ="/watch"  component={Iframe}>
                    </Route>
                    <Route path="/search" children={<Search />} >
                        <Search />
                    </ Route >
                </BrowserRouter>
            </div>
        )
    }
}
