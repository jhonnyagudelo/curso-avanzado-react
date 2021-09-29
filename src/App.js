import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo/index";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/NavBar/index";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pet/:id" component={Home} />
          <Route exact path="/detail/:id" component={Detail} />
        </Switch>
        <NavBar />
      </BrowserRouter>
    </>
  );
};
export default App;
