import React from "react";
import { withGithubData } from "./withGithubData";
import List from "../render-prop/List";

const IssuesList = withGithubData(List, "repos/facebook/react/issues");

const ReposList = withGithubData(List, "users/facebook/repos");

function HigherOrderComponent() {
  return (
    <div>
      <h3>Issues</h3>
      <IssuesList renderItem={item => item.title} />

      <h3>Repos</h3>
      <ReposList renderItem={item => item.name} />
    </div>
  );
}

export default HigherOrderComponent;
