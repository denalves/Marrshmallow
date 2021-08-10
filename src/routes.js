import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Header from "./Components/Header/Header";
import Services from "./pages/Services/Services";

import React from "react";
import About from "./pages/About/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Services/>
      <About/>
    </BrowserRouter>
  );
};

export default Routes;
