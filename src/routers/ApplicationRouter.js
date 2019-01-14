import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../UIComponents/Header';
import DashBoard from '../UIComponents/DashBoard';
import NotFound from '../components/NotFound';
import SideBar from '../UIComponents/SideBar'

const ApplicationRouter = () => (
    <BrowserRouter>
        <div className="wrapper">
            <SideBar />
            <div id="content">
                <Header />
                <div id="content">
                    <Switch>
                        <Route path="/" component={DashBoard} exact={true} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default ApplicationRouter;