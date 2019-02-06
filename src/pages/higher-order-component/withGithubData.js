import React from "react";
import GithubData from "../render-prop/GithubData";
import hoistNonReactStatics from "hoist-non-react-statics";

function withGithubData(Component, resource) {
  const Wrapper = (props, ref) => (
    <GithubData resource={resource}>
      {({ items }) => <Component items={items} {...props} ref={ref} />}
    </GithubData>
  );

  Wrapper.displayName = `withGithubData(${Component.displayName ||
    Component.name})`;

  return hoistNonReactStatics(React.forwardRef(Wrapper), Component);
}

export { withGithubData };
