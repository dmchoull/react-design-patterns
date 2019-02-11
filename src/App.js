import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CompoundComponents from "./pages/compound-components";
import FlexibleCompoundComponents from "./pages/flexible-compound";
import RenderProp from "./pages/render-prop";
import HigherOrderComponent from "./pages/higher-order-component";
import GithubHook from "./pages/github-hook";

const listStyle = {
  listStyle: "none",
};

const listItemStyle = {
  display: "inline",
  paddingRight: 20,
};

const pages = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/compound",
    name: "Compound Components",
    component: CompoundComponents,
  },
  {
    path: "/flexible-compound",
    name: "Flexible Compound Components",
    component: FlexibleCompoundComponents,
  },
  {
    path: "/render-prop",
    name: "Render Prop",
    component: RenderProp,
  },
  {
    path: "/higher-order-component",
    name: "Higher Order Component",
    component: HigherOrderComponent,
  },
  {
    path: "/github-hook",
    name: "Hooks",
    component: GithubHook,
  },
];

function Nav() {
  return (
    <nav>
      <ul style={listStyle}>
        {pages.map(page => (
          <li key={page.path} style={listItemStyle}>
            <Link to={page.path}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const AppRouter = () => (
  <Router>
    <div>
      <Nav />

      <div className="page-wrapper">
        {pages.map(page => (
          <Route
            key={page.path}
            path={page.path}
            exact
            component={page.component}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default AppRouter;
