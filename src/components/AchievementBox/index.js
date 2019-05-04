import React from "react";
import PropTypes from "prop-types";
import { Box } from "./style";

class AchievementBox extends React.Component {
  render() {
    const { title, source } = this.props.data;

    return (
      <Box>
        <div className="body">
          <div className="image-box">
            {source && <img className="image" src={require(`${source}`)} />}
          </div>
          <div className="title">
            <p>{title}</p>
          </div>
        </div>
      </Box>
    );
  }
}

AchievementBox.propTypes = {
  data: PropTypes.object.isRequired
};

export default AchievementBox;
