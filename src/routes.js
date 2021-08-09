import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Services from "./pages/Services/Services";

import React from "react";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Services/>
    </BrowserRouter>
  );
};

export default Routes;
