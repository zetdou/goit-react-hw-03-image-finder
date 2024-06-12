import { Component } from "react";
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { largeImageURL, onClick } = this.props;
    onClick(largeImageURL);
  };

  render() {
    const { webformatURL } = this.props;

    return (
      <li className="gallery-item" onClick={this.handleClick}>
        <img src={webformatURL} alt="" />
      </li>
    );
  }
}
