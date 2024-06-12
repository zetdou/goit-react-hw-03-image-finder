import { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick } = this.props;

    return (
      <button type="button" onClick={onClick} className="button">
        Load more
      </button>
    );
  }
}
