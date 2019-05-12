import React from "react";

import { LoadingContainer } from "./style";

class Loading extends React.Component {
  render() {
    return (
      <LoadingContainer>
        <div className="loading">
          <div className="circ" />
          <div className="circ" />
          <div className="circ" />
        </div>
      </LoadingContainer>
    );
  }
}

export default Loading;
