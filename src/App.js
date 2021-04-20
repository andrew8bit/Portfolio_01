import React, { useState } from "react";
import "./css/main.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import {
  Navbar,
  Contact,
  Home,
  Profile,
  Projects,
  Splash,
} from "./components/";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation()

  return (
    <>
      <TransitionGroup component={null}>

          <CSSTransition
            timeout={1000}
            classNames='fade-'
            key={location.key}
            unmountOnExit={true}
            appear={true}
            >
            <Switch location={location }>
                <Route exact path="/" component={Splash} />
              <div>
                <Navbar />
                <Route path="/home" component={Home} />
              </div>
            </Switch>

          </CSSTransition>

      </TransitionGroup>
    </>
  );
}

export default App;
