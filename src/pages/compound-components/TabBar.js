import React, { Component } from "react";
import "./TabBar.css";

class TabBar extends Component {
  static Button = ({ name, active, onClick }) => (
    <span
      className={["tab-button", active ? "active" : ""].join(" ")}
      onClick={onClick}
    >
      {name}
    </span>
  );

  state = {
    activeTabIndex: 0,
  };

  setActiveTab = index => {
    this.setState({ activeTabIndex: index }, () =>
      this.props.onTabChange(this.getActiveTabName())
    );
  };

  getActiveTabName() {
    return this.props.children[this.state.activeTabIndex].props.name;
  }

  render() {
    const buttons = React.Children.map(
      this.props.children,
      (child, childIndex) =>
        React.cloneElement(child, {
          active: this.state.activeTabIndex === childIndex,
          onClick: () => this.setActiveTab(childIndex),
        })
    );

    return <div className="tab-bar">{buttons}</div>;
  }
}

export default TabBar;
