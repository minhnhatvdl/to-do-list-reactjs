import React, { Component } from "react";
import $ from "jquery";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
var randomId = require("random-id");

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: randomId(5, "aA0"),
      name: "",
      labelArr: [],
      priority: 3, // Low
      memberIdArr: [],
      status: 1, // Not yet started
      description: ""
    };
  }
  // submit a form
  onSubmit(event) {
    event.preventDefault();
    if (this.props.isAddTask) {
      // add a task
      this.props.addTask(this.state);
    } else {
      // edit a task
      this.props.saveTask(this.state);
    }
    // set default
    this.setState({
      id: randomId(5, "aA0"),
      name: "",
      labelArr: [],
      priority: 3, // Low
      memberIdArr: [],
      status: 1, // Not yet started
      description: ""
    });
    // close a modal
    $("#btnCloseModal").click();
  }
  // change field data
  onChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  // checkbox group on change
  checkboxGroupChange(values, fieldName) {
    this.setState({
      [fieldName]: values
    });
  }
  // change modal when modal receives props
  componentWillReceiveProps(nextProps) {
    const {
      id,
      name,
      labelArr,
      priority,
      memberIdArr,
      status,
      description
    } = nextProps.taskEditing;
    this.setState({
      id,
      name,
      labelArr,
      priority,
      memberIdArr,
      status,
      description
    });
  }
  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Begin form */}
            <form onSubmit={this.onSubmit.bind(this)}>
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">
                  {this.props.isAddTask ? "Create a new task" : "Edit a task"}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="taskName">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange.bind(this)}
                    value={this.state.name}
                    required
                  />
                </div>
                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    name="description"
                    onChange={this.onChange.bind(this)}
                    value={this.state.description}
                  />
                </div>
                {/* Priority */}
                <div className="form-group">
                  <label htmlFor="priority">Priority</label>
                  <select
                    className="form-control"
                    name="priority"
                    onChange={this.onChange.bind(this)}
                    value={this.state.priority}
                    required
                  >
                    <option value="3">Low</option>
                    <option value="2">Medium</option>
                    <option value="1">High</option>
                  </select>
                </div>
                {/* Implementer */}
                <label>Implementer</label>
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIdArr"
                  onChange={values =>
                    this.checkboxGroupChange(values, "memberIdArr")
                  }
                  value={this.state.memberIdArr}
                >
                  <label className="mr-4">
                    <Checkbox value="user_1" /> Nicolas Augier
                  </label>
                  <label className="mr-4">
                    <Checkbox value="user_2" /> Flavien Becker
                  </label>
                  <label className="mr-4">
                    <Checkbox value="user_3" /> Arnauld Diebolt
                  </label>
                </CheckboxGroup>
                {/* Label */}
                <label>Label</label>
                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr"
                  onChange={values =>
                    this.checkboxGroupChange(values, "labelArr")
                  }
                  value={this.state.labelArr}
                >
                  <label className="mr-4">
                    <Checkbox value="Frontend" /> Frontend
                  </label>
                  <label className="mr-4">
                    <Checkbox value="Backend" /> Backend
                  </label>
                  <label className="mr-4">
                    <Checkbox value="API" /> API
                  </label>
                  <label className="mr-4">
                    <Checkbox value="Issue" /> Issue
                  </label>
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  {this.props.isAddTask ? "Add" : "Edit"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  id="btnCloseModal"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </form>
            {/* End form */}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
