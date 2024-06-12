import { Component } from "react";
import PropTypes from "prop-types"

export default class Modal extends Component {
    static propTypes = {
        largeImageURL: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    };

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = (ev) => {
        if (ev.code === "Escape") {
            this.props.onClose();
        }
    };

    handleBackdropClick = (ev) => {
        if (ev.currentTarget === ev.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL } = this.props;

        return (
            <div className="overlay" onClick={this.handleBackdropClick}>
                <div className="modal">
                    <img src={largeImageURL} alt="" />
                </div>
            </div>
        );
    }
}