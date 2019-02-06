import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CompoundComponents from "./pages/compound-components";
import FlexibleCompoundComponents from "./pages/flexible-compound";
import RenderProp from "./pages/render-prop";

const listStyle = {
  listStyle: "none",
};

const listItemStyle = {
  display: "inline",
  paddingRight: 20,
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
          <li style={listItemStyle}>
            <Link to="/flexible-compound/">Flexible Compound Components</Link>
          </li>
          <li style={listItemStyle}>
            <Link to="/render-prop/">Render Prop</Link>
          </li>
        </ul>
      </nav>

      <div className="page-wrapper">
        <Route path="/" exact component={Home} />
        <Route path="/compound/" component={CompoundComponents} />
        <Route
          path="/flexible-compound/"
          component={FlexibleCompoundComponents}
        />
        <Route path="/render-prop/" component={RenderProp} />
      </div>
    </div>
  </Router>
);

export default AppRouter;
