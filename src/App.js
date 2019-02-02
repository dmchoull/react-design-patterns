import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CompoundComponents from "./pages/compound-components";
import Home from "./pages/home/Home";

const listStyle = {
  listStyle: "none"
};

const listItemStyle = {
  display: "inline",
  paddingRight: 20
};

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/compound/">Compound Components</Link>
          </li>
        </ul>
      </nav>

      <div className="page-wrapper">
        <Route path="/" exact component={Home} />
        <Route path="/compound/" component={CompoundComponents} />
      </div>
    </div>
  </Router>
);

export default AppRouter;
