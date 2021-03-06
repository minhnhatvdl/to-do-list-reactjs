import React, { Component } from "react";
import CreateNewTask from "./Control/CreateNewTask";
import InitTask from "./Control/InitTask";
import FilterStatus from "./Control/FilterStatus";
import FilterLabel from "./Control/FilterLabel";
import FilterPriority from "./Control/FilterPriority";
import Sort from "./Control/Sort";

class Control extends Component {
  render() {
    return (
      <div className="col-md-2 text-center px-0">
        <div className="header header--left d-flex align-items-center">
          <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
          <h3 className="text-white d-inline font-weight-light ml-2">Admin</h3>
        </div>
        {/* Create a new task */}
        <CreateNewTask />
        {/* Init tasks */}
        <InitTask />
        {/* Filter */}
        <div className="px-3">
          {/* Filter Status */}
          <FilterStatus />
          {/* Filter Label */}
          <FilterLabel />
          {/* FIlter Priority */}
          <FilterPriority />
          {/* Sort */}
          <Sort />
        </div>
      </div>
    );
  }
}

export default Control;
