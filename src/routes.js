import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Services from "./pages/Services/Services";

import React from "react";
import About from "./pages/About/About";
import Plans from "./pages/Plans/Plans";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Services/>
      <About/>
      <Plans/>
    </BrowserRouter>
  );
};

export default Routes;
