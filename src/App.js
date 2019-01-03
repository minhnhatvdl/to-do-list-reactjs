import React, { Component } from "react";
import "./App.css";

import Modal from "./Components/Modal";
import Control from "./Components/Control";
import Task from "./Components/Task";
// import data
import ListTask from "./Data/InitTask";

class App extends Component {
  render() {
    const { listTask } = ListTask
    return (
      <div>
        <h1 className="text-center my-2">Workflow Management</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control />
            {/* DISPLAY */}
            <Task listTask={listTask} />
          </div>
        </div>
        {/* The Modal */}
        <Modal />
      </div>
    );
  }
}

export default App;
