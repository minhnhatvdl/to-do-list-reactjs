import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

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

const mapDispatchToProps = dispatch => {
  return {
    generateListTask: () => {
      dispatch(actions.initAllTask());
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(InitTask);
