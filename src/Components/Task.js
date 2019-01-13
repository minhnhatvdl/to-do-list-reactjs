import React, { Component } from "react";

import Item from "./Task/Item";
import Thead from "./Task/Thead";

class Task extends Component {
  render() {
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
        default:
          listTaskFilter = [...listTask];
          break;
      }
    }
    console.log(listTask, filterType, filterValue);
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

export default Task;
