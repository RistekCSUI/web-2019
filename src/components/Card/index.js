import React from "react";
import { StyledCard } from "./style";
import PropTypes from "prop-types";

export default class Card extends React.Component {
  render() {
    return <StyledCard>{this.props.children}</StyledCard>;
  }
}

Card.propTypes = { children: PropTypes.node };

Card.defaultProps = { children: null };
