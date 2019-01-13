import React, { Component } from "react";

class FilterPriority extends Component {
  filterPriority(event) {
    this.props.filterTask("priority", event.target.value);
  }
  render() {
    // const { filterType, filterValue, filterTask } = this.props;
    return (
      <div className="form-group text-left">
        <label htmlFor="sel1">Priority</label>
        <select
          className="form-control"
          onChange={this.filterPriority.bind(this)}
        >
          <option className="font-weight-bold" value="-1">
            All
          </option>
          <option className="text-info font-weight-bold" value="3">
            Low
          </option>
          <option className="text-success font-weight-bold" value="2">
            Medium
          </option>
          <option className="text-danger font-weight-bold" value="1">
            High
          </option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;
