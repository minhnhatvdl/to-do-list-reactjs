import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class FilterStatus extends Component {
  render() {
    const { filterType, filterValue, filterTask } = this.props;
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">
          Filter
          <li
            className="py-1 display-5 lead"
            onClick={filterTask.bind(this, "status", "-1")}
          >
            All
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "status" && filterValue === "1"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "status", "1")}
          >
            <i className="fa fa-coffee mr-2" />
            Not yet started
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "status" && filterValue === "2"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "status", "2")}
          >
            <i className="fa fa-spinner mr-2" />
            In process
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "status" && filterValue === "3"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "status", "3")}
          >
            <i className="fa fa-check-square-o mr-2" />
            Finish
          </li>
          <li
            className={`py-1 display-5 lead ${
              filterType === "status" && filterValue === "4"
                ? "activeFilter"
                : ""
            }`}
            onClick={filterTask.bind(this, "status", "4")}
          >
            <i className="fa fa-trash-o mr-2" />
            Cancel
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
)(FilterStatus);
