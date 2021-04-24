import React from "react";
import "./css/main.css";
import { Switch, Route, useLocation} from "react-router-dom";
import {
  Profile,
  Splash,
} from "./components/";

import {
  Home
} from "./components/pages/home"

// import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();


  return (
    <>
      {/* <TransitionGroup component={null}>
          <CSSTransition
            timeout={1000}
            classNames='fade-'
            key={location.key}
            unmountOnExit={true}
            appear={true}
            > */}
            
            <Switch location={location}>
                <Route exact path="/" component={Splash} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/profile" component={Profile} />
            </Switch>

          {/* </CSSTransition>
      </TransitionGroup> */}
    </>
  );
}

export default App;
