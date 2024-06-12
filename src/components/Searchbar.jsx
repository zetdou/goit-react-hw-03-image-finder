import { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };

  handleChange = (ev) => {
    this.setState({ query: ev.currentTarget.value });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    const { query } = this.state;

    return (
      <header>
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
