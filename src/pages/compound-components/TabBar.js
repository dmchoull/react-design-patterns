import React, { Component } from "react";
import "./TabBar.css";

class TabBar extends Component {
  static Button = ({ name, active, onClick }) => (
    <span className={active ? "active" : ""} onClick={onClick}>
      {name}
    </span>
  );

  state = {
    activeTabIndex: 0
  };

  setActiveTab = index => {
    this.setState({ activeTabIndex: index });
  };

  render() {
    return React.Children.map(this.props.children, (child, childIndex) =>
      React.cloneElement(child, {
        active: this.state.activeTabIndex === childIndex,
        onClick: () => this.setActiveTab(childIndex)
      })
    );
  }
}

export default TabBar;
