import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="form-group text-left">
        <label>Sort</label>
        <select className="form-control">
          <option>From A to Z</option>
          <option>From Z to A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
