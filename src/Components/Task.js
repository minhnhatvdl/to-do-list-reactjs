import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Task/Item";
import Thead from "./Task/Thead";

class Task extends Component {
  searchTask(event) {
    this.props.filterTask(event.target.name, event.target.value);
  }
  render() {
    console.log(this.props);
    const {
      listTask,
      editTask,
      changeStatus,
      filterType,
      filterValue
    } = this.props;
    let listTaskFilter = [...listTask];
    if (filterValue !== "-1") {
      switch (filterType) {
        case "status":
          listTaskFilter = listTaskFilter.filter(
            task => task.status.toString() === filterValue
          );
          break;
        case "label":
          listTaskFilter = listTaskFilter.filter(
            task => task.labelArr.indexOf(filterValue) !== -1
          );
          break;
        case "priority":
          listTaskFilter = listTaskFilter.filter(
            task => task.priority === +filterValue
          );
          break;
        case "search":
          listTaskFilter = listTaskFilter.filter(
            task =>
              task.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          );
          break;
        case "sort":
          if (filterValue === "asc") {
            listTaskFilter.sort((taskA, taskB) => {
              let nameA = taskA.name.toUpperCase(); // ignore upper and lowercase
              let nameB = taskB.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return -1;
              }
              if (nameA > nameB) {
                return 1;
              }
              // names must be equal
              return 0;
            });
          } else {
            listTaskFilter.sort((taskA, taskB) => {
              let nameA = taskA.name.toUpperCase(); // ignore upper and lowercase
              let nameB = taskB.name.toUpperCase(); // ignore upper and lowercase
              if (nameA < nameB) {
                return 1;
              }
              if (nameA > nameB) {
                return -1;
              }
              // names must be equal
              return 0;
            });
          }
          break;
        default:
          listTaskFilter.sort((taskA, taskB) => {
            let nameA = taskA.name.toUpperCase(); // ignore upper and lowercase
            let nameB = taskB.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
          break;
      }
    }
    const templateListTask =
      listTaskFilter.length > 0 ? (
        listTaskFilter.map((task, index) => (
          <Item
            key={index}
            item={task}
            index={index}
            editTask={editTask}
            changeStatus={changeStatus}
          />
        ))
      ) : (
        <tr>
          <td colSpan="7" className="text-center">
            List of tasks is empty
          </td>
        </tr>
      );
    return (
      <div className="col-md-10 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">List of tasks</h3>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group text-left my-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search a task"
                  name="search"
                  onChange={this.searchTask.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <Thead />
            <tbody>{templateListTask}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listTask: state.listTask
  };
};
export default connect(
  mapStateToProps,
  null
)(Task);
