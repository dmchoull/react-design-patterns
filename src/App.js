import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompoundComponet from "./pages/compound-components";
import Home from "./pages/home/Home";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/compound/">Compound Component</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/compound/" component={CompoundComponet} />
    </div>
  </Router>
);

export default AppRouter;
