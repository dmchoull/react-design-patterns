import React from "react";
import List from "../../shared/List";
import { useGithubData } from "./useGithubData";

function IssuesList({ repo }) {
  const items = useGithubData(`repos/${repo}/issues`);
  return <List items={items} renderItem={item => item.title} />;
}

function GithubHook() {
  return (
    <div>
      <h3>Issues</h3>
      <IssuesList repo="facebook/react" />
    </div>
  );
}

export default GithubHook;
