/* eslint-disable complexity, react/jsx-key, object-property-newline, template-curly-spacing, sort-keys, prefer-const, dot-notation */

import React, { Component } from "react";
import PropTypes from "prop-types";
import CloseIcon from "../../assets/close-black.svg";
import CloseLarge from "../../assets/close-larger.svg";
import { ActivityModalStyle } from "./style.js";

class ActivityModal extends Component {
  UNSAFE_componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutsideModal, false);
  }

  componentWillUnmount() {
    document.removeEventListener(
      "mousedown",
      this.handleClickOutsideModal,
      false
    );
  }

  handleClickOutsideModal = evt => {
    if (!this.node.contains(evt.target)) {
      this.onClickCloseModal();
    }
  };

  handleClickMoveModal = increment => {
    this.props.onMoveModal(increment);
  };

  onClickCloseModal = () => {
    this.props.onClose();
  };

  render() {
    return (
      <ActivityModalStyle>
        <div className="modal-overlay">
          <div className="modal" ref={node => (this.node = node)}>
            <React.Fragment>
              <div className="close-button" onClick={this.onClickCloseModal}>
                <img src={CloseIcon} />
              </div>
              <div className="close-mobile" onClick={this.onClickCloseModal}>
                <img src={CloseLarge} />
              </div>
            </React.Fragment>
            <div className="container">
              <div className="img-container">
                <img
                  className="activity-img"
                  src={this.props.image}
                  alt="activity_image"
                />
              </div>
              <div className="detail-container">
                <div>
                  <div className="title-cont">
                    <h1>{this.props.title}</h1>
                  </div>
                  <div className="desc-cont">
                    <p>{this.props.desc}</p>
                  </div>
                </div>
                <div className="buttons-cont">
                  <div
                    className="move-button"
                    onClick={() => this.props.onMoveModal(-1)}
                  >
                    Previous
                  </div>
                  <div
                    className="move-button"
                    onClick={() => this.props.onMoveModal(1)}
                  >
                    Next
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ActivityModalStyle>
    );
  }
}

ActivityModal.propTypes = {
  onMoveModal: PropTypes.func,
  onClose: PropTypes.func,
  onClickCard: PropTypes.func,
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ActivityModal;
