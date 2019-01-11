import React, { Component } from "react";

class CreateNewTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.props.openModalAddTask}
      >
        <i className="fa fa-pencil-square-o" />
        New task
      </button>
    );
  }
}

export default CreateNewTask;
