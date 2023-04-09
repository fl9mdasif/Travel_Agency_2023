import React from 'react';
import { Switch, Route } from "react-router-dom"
import Home from '../Pages/Home/Home';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />

        </Switch>

    );
};

export default Routes;