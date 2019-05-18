/* eslint-disable global-require */
import React from "react";
import PropTypes from "prop-types";
import { Box } from "./style";
// import Img from "react-image";
// import Spinner from "../Spinner";

class AchievementBox extends React.Component {
  render() {
    const { title, source } = this.props.data;

    return (
      <Box>
        <div className="body">
          <div className="image-box">
            <img
              className="image"
              alt="Achievement image"
              src={require(`${source}`)}
            />
            {/* {source && (
              <Img
                className="image"
                src={require(`${source}`)}
                loader={<Spinner />}
                alt="Achievement Image"
              />
            )} */}
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
