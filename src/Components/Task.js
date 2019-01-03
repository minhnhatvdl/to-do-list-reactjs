import React, { Component } from "react";

import Item from "./Task/Item";
import Thead from "./Task/Thead";

class Task extends Component {
  render() {
    const templateListTask = this.props.listTask.map((task, index) => (
      <Item key={index} item={task} index={index} />
    ));
    return (
      <div className="col-md-9 px-0">
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
                  placeholder="Tìm kiếm công việc"
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
