import React, { Component } from "react";
import "./App.css";

import Modal from "./Components/Modal";
import Control from "./Components/Control";
import Task from "./Components/Task";
// import data
import ListTask from "./Data/InitTask";
var randomId = require("random-id");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: {
        id: randomId(5, "aA0"),
        name: "",
        labelArr: [],
        priority: 3, // Low
        memberIdArr: [],
        status: 1, // Not yet started
        description: "",
        filterType: "",
        filterValue: "",
      },
      isAddTask: true
    };
  }
  componentWillMount() {
    // get listTask on localStorage
    const tasks = JSON.parse(localStorage.getItem("listTask"))
      ? JSON.parse(localStorage.getItem("listTask"))
      : [];
    this.setState({
      tasks
    });
  }
  // set listTask on localStorage
  generateListTask() {
    localStorage.setItem("listTask", JSON.stringify(ListTask.listTask));
    const tasks = JSON.parse(localStorage.getItem("listTask"));
    this.setState({
      tasks
    });
  }
  // open modal add task
  openModalAddTask() {
    this.setState({
      isAddTask: true,
      taskEditing: {
        id: randomId(5, "aA0"),
        name: "",
        labelArr: [],
        priority: 3, // Low
        memberIdArr: [],
        status: 1, // Not yet started
        description: ""
      }
    });
  }
  // add a new task
  addTask(task) {
    const tasks = [...this.state.tasks, task];
    localStorage.setItem("listTask", JSON.stringify(tasks));
    this.setState({
      tasks
    });
  }
  // edit a task
  editTask(task) {
    this.setState({
      taskEditing: task,
      isAddTask: false
    });
  }
  // save a edited task
  saveTask(taskEditing) {
    const copiedTasks = this.state.tasks;
    const index = copiedTasks.findIndex(task => task.id === taskEditing.id);
    copiedTasks[index] = taskEditing;
    this.setState({
      tasks: copiedTasks
    });
    localStorage.setItem("listTask", JSON.stringify(copiedTasks));
  }
  // change status
  changeStatus(task) {
    this.saveTask(task);
  }
  // filter
  filterTask(filterType, filterValue) {
    this.setState({
      filterType, filterValue
    })
  }
  render() {
    const { tasks, taskEditing, isAddTask, filterType, filterValue } = this.state;
    return (
      <div>
        <h1 className="text-center my-2">Workflow Management</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Control
              generateListTask={this.generateListTask.bind(this)}
              openModalAddTask={this.openModalAddTask.bind(this)}
              filterTask={this.filterTask.bind(this)}
              filterType={filterType}
              filterValue={filterValue}
            />
            {/* DISPLAY */}
            <Task
              listTask={tasks}
              editTask={this.editTask.bind(this)}
              changeStatus={this.changeStatus.bind(this)}
              filterType={filterType}
              filterValue={filterValue}
            />
          </div>
        </div>
        {/* The Modal */}
        <Modal
          addTask={this.addTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          taskEditing={taskEditing}
          isAddTask={isAddTask}
        />
      </div>
    );
  }
}

export default App;
