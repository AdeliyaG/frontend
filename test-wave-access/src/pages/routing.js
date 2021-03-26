import React from 'react';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ActiveQueuePage from "./active-queue";
import VisitedQueuePage from "./visited-queue";

const Routing = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ActiveQueuePage}/>
            <Route exact path="/visited" component={VisitedQueuePage}/>
            <Redirect to='/'/>
        </BrowserRouter>
    )
};

export default Routing;
