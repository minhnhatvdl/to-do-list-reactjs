import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class Sort extends Component {
  sortTask(event) {
    this.props.filterTask(event.target.name, event.target.value);
  }
  render() {
    return (
      <div className="form-group text-left">
        <label>Sort</label>
        <select
          className="form-control"
          onChange={this.sortTask.bind(this)}
          name="sort"
        >
          <option value="asc">From A to Z</option>
          <option value="desc">From Z to A</option>
        </select>
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
)(Sort);
