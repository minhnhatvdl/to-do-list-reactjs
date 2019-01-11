import React, { Component } from "react";

class InitTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn--initTask"
        onClick={this.props.generateListTask}
      >
        <i className="fa fa-pencil-square-o" />
        Get tasks
      </button>
    );
  }
}

export default InitTask;
