import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class FilterLabel extends Component {
  render() {
    const { filterType, filterValue, filterTask } = this.props;
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">
          Label
          <li
            className="py-1 display-5 lead"
            onClick={filterTask.bind(this, "label", "-1")}
          >
            All
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "label" && filterValue === "Frontend"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "label", "Frontend")}
          >
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "label" && filterValue === "Backend"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "label", "Backend")}
          >
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "label" && filterValue === "API"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "label", "API")}
          >
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "label" && filterValue === "Issue"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "label", "Issue")}
          >
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterTask: (filterType, filterValue) => {
      dispatch(actions.filterTask(filterType, filterValue));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FilterLabel);
