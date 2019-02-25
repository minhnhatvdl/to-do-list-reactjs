import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class CreateNewTask extends Component {
  handlerClick() {
    // open a modal of adding task
    // this.props.openModalAddTask();
    // convert state isAddTask to true
    this.props.convertIsAddTaskToTrue();
    // clear a form
    this.props.clearForm();
  }
  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.handlerClick.bind(this)}
      >
        <i className="fa fa-pencil-square-o" />
        New task
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    convertIsAddTaskToTrue: () => {
      dispatch(actions.convertIsAddTaskToTrue());
    },
    clearForm: () => {
      dispatch(actions.clearForm());
    }
  }
};

export default connect(
  null,
  mapDispatchToProps
)(CreateNewTask);
