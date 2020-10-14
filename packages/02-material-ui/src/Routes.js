import React from "react";
import { Route, Switch } from "react-router-dom";

import StartPage from "./MuiDefaultPage";

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <StartPage />
        </Route>
    </Switch>
);

export default Routes;