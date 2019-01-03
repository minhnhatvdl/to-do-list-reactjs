import React, { Component } from "react";
import "./App.css";

import Modal from "./Components/Modal";
import Control from "./Components/Control";
import Task from "./Components/Task";
// import data
import ListTask from "./Data/InitTask";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }
  componentWillMount() {
    // get listTask on localStorage
    const tasks = JSON.parse(localStorage.getItem("listTask"))
      ? JSON.parse(localStorage.getItem("listTask")).listTask
      : [];
    this.setState({
      tasks
    });
  }
  // set listTask on localStorage
  generateListTask() {
    localStorage.setItem("listTask", JSON.stringify(ListTask));
    const tasks = JSON.parse(localStorage.getItem("listTask")).listTask;
    this.setState({
      tasks
    });
  }
  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1 className="text-center my-2">Workflow Management</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control generateListTask={this.generateListTask.bind(this)} />
            {/* DISPLAY */}
            <Task listTask={tasks} />
          </div>
        </div>
        {/* The Modal */}
        <Modal />
      </div>
    );
  }
}

export default App;
