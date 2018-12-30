import React, { Component } from "react";

class FilterPriority extends Component {
  render() {
    return (
      <div className="form-group text-left">
        <label htmlFor="sel1">Priority</label>
        <select className="form-control">
          <option className="font-weight-bold">All</option>
          <option className="text-info font-weight-bold">Low</option>
          <option className="text-success font-weight-bold">Medium</option>
          <option className="text-danger font-weight-bold">High</option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;
