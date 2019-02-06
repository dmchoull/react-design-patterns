import { Component } from "react";
import debounce from "debounce";

class GithubData extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.fetchResource();
  }

  fetchResource = debounce(() => {
    fetch(`https://api.github.com/${this.props.resource}`)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          return [];
        }
      })
      .then(items => this.setState({ items }));
  }, 500);

  componentDidUpdate(prevProps) {
    if (
      prevProps.user !== this.props.user ||
      prevProps.resource !== this.props.resource
    ) {
      this.fetchResource();
    }
  }

  render() {
    return this.props.children({ items: this.state.items });
  }
}

export default GithubData;
