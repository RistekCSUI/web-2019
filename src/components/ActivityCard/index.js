import React from "react";
import PropTypes from "prop-types";
import { ActivityCardStyle } from "./style";

class ActivityCard extends React.Component {
  render() {
    return (
      <ActivityCardStyle background={this.props.image}>
        <div className="flex centerize column card-container">
          <div className="flex centerize image-container">
            <div
              className="detail-button"
              onClick={() => this.props.onClickCard()}
            >
              <p>More detail</p>
            </div>
          </div>
          <div className="flex centerize activity-title ">
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </ActivityCardStyle>
    );
  }
}

ActivityCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  onClickCard: PropTypes.func
};

export default ActivityCard;
