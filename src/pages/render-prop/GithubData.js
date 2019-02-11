import { Component } from "react";
import debounce from "debounce";
import { fetchFromGithub } from "../../shared/fetchFromGithub";

class GithubData extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.fetchResource();
  }

  fetchResource = debounce(() => {
    fetchFromGithub(this.props.resource).then(items =>
      this.setState({ items })
    );
  }, 200);

  componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      this.fetchResource();
    }
  }

  componentWillUnmount() {
    this.fetchResource.clear();
  }

  render() {
    return this.props.children({ items: this.state.items });
  }
}

export default GithubData;
