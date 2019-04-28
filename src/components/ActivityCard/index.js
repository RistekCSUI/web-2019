import React from "react";
import PropTypes from "prop-types";
import { ActivityCardStyle } from "./style";

class ActivityCard extends React.Component {
  render() {
    return (
      <ActivityCardStyle background={this.props.image}>
        <div className="flex centerize column card-container">
          <div className="image-container" />
          <div className="flex start activity-title ">
            <h3>{this.props.title}</h3>
          </div>
        </div>
      </ActivityCardStyle>
    );
  }
}

ActivityCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};

export default ActivityCard;
