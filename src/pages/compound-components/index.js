import React, { Component } from "react";
import TabBar from "./TabBar";
import "./index.css";

class CompoundComponent extends Component {
  state = {
    activeTab: "Home",
  };

  onTabChange = activeTab => {
    this.setState({ activeTab });
  };

  render() {
    return (
      <div className="container">
        <div className="tab-content">
          {`This is the ${this.state.activeTab} tab`}
        </div>

        <TabBar onTabChange={this.onTabChange}>
          <TabBar.Button name="Home" />
          <TabBar.Button name="Contacts" />
          <TabBar.Button name="About" />
        </TabBar>
      </div>
    );
  }
}

export default CompoundComponent;
