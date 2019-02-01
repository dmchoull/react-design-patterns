import React from "react";
import TabBar from "./TabBar";

function CompoundComponent() {
  return (
    <TabBar>
      <TabBar.Button name="Home" />
      <TabBar.Button name="Contacts" />
      <TabBar.Button name="About" />
    </TabBar>
  );
}

export default CompoundComponent;
