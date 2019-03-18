import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Map0 from "./map0";
import Map1 from "./map1";
import Map2 from "./map2";
import Map3 from "./map3";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/map0" component={Map0} />
      <Route path="/map1" component={Map1} />
      <Route path="/map2" component={Map2} />
      <Route path="/map3" component={Map3} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
