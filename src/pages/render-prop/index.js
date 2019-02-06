import React, { Component } from "react";
import GithubData from "./GithubData";
import List from "./List";
import Select from "./Select";

class RenderProp extends Component {
  state = {
    user: "",
    repo: "",
  };

  render() {
    const { user, repo } = this.state;

    return (
      <div>
        <input
          type="text"
          id="user"
          value={this.state.user}
          onChange={e => this.setState({ user: e.target.value })}
        />

        <GithubData resource={`users/${user}/repos`}>
          {({ items }) => (
            <Select
              id="repos"
              label="Repository"
              items={items}
              onChange={repo => this.setState({ repo })}
            />
          )}
        </GithubData>

        <h3>Issues</h3>

        <GithubData resource={`repos/${user}/${repo}/issues`}>
          {({ items }) => (
            <List
              items={items}
              renderItem={issue => `${issue.number} - ${issue.title}`}
            />
          )}
        </GithubData>
      </div>
    );
  }
}

export default RenderProp;
