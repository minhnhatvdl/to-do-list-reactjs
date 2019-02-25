import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class Item extends Component {
  // get color label
  getColorLabel(label) {
    let colorLabel;
    switch (label) {
      case "Frontend":
        colorLabel = "#389E0D";
        break;
      case "Backend":
        colorLabel = "#722ED1";
        break;
      case "API":
        colorLabel = "#13C2C2";
        break;
      case "Issue":
        colorLabel = "#CF1322";
        break;
      default:
        colorLabel = "";
    }
    return colorLabel;
  }
  // edit a task
  editTask() {
    this.props.editTask(this.props.item);
  }
  // change status
  onChangeStatus(event) {
    const taskUpdating = {
      ...this.props.item,
      [event.target.name]: +event.target.value
    };
    this.props.changeStatusTask(taskUpdating);
  }
  // handler click on button Modify
  handlerClickOnModify() {
    // convert state isAddTask to false
    this.props.convertIsAddTaskToFalse();
    // edit a task
    this.props.editTask(this.props.item);
  }
  render() {
    const { index, item } = this.props;
    // template list label
    const templateListLabel = item.labelArr.map((label, index) => (
      <i
        key={index}
        className="fa fa-circle"
        style={{ color: this.getColorLabel(label) }}
      />
    ));
    // priority
    let textPriority;
    let colorPriority;
    switch (parseInt(item.priority)) {
      case 1:
        textPriority = "High";
        colorPriority = "text-danger";
        break;
      case 2:
        textPriority = "Medium";
        colorPriority = "text-success";
        break;
      case 3:
        textPriority = "Low";
        colorPriority = "text-primary";
        break;
      default:
        textPriority = "";
        colorPriority = "";
        break;
    }
    // template list user
    const templateListUser = item.memberIdArr.map((user, index) => (
      <img key={index} src={`./img/${user}.jpg`} className="user" alt="" />
    ));
    // template status
    let statusIconClass;
    switch (item.status) {
      case 1:
        statusIconClass = "fa-coffee";
        break;
      case 2:
        statusIconClass = "fa-spinner";
        break;
      case 3:
        statusIconClass = "fa-check-square-o";
        break;
      case 4:
        statusIconClass = "fa-trash-o";
        break;
      default:
        statusIconClass = "";
        break;
    }
    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{templateListLabel}</td>
        <td className={`${colorPriority} font-weight-bold text-center`}>
          {textPriority}
        </td>
        <td className="text-center">{templateListUser}</td>
        <td className="text-center d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-outline-danger mr-2"
            onClick={this.handlerClickOnModify.bind(this)}
            data-toggle="modal"
            data-target="#modalTask"
          >
            Modify
          </button>
          <select
            name="status"
            className="form-control"
            value={item.status}
            onChange={this.onChangeStatus.bind(this)}
          >
            <option value="1">Not yet started</option>
            <option value="2">In process</option>
            <option value="3">Finish</option>
            <option value="4">Cancel</option>
          </select>
        </td>
        <td className="text-center">
          <i className={`fa ${statusIconClass} mr-2`} />
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editTask: taskEditing => {
      dispatch(actions.editTask(taskEditing));
    },
    convertIsAddTaskToFalse: () => {
      dispatch(actions.convertIsAddTaskToFalse());
    },
    changeStatusTask: taskUpdating => {
      dispatch(actions.changeStatusTask(taskUpdating));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
