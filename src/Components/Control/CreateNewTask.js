import React, { Component } from "react";

class CreateNewTask extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
      >
        <i className="fa fa-pencil-square-o" />
        Create a new task
      </button>
    );
  }
}

export default CreateNewTask;
