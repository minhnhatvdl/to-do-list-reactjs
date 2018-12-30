import React, { Component } from "react";

class Thead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="text-center">Order</th>
          <th className="text-center">Task</th>
          <th className="text-center">Label</th>
          <th className="text-center">Priority</th>
          <th className="text-center">Implementer</th>
          <th className="text-center">Action</th>
          <th className="text-center">Status</th>
        </tr>
      </thead>
    );
  }
}

export default Thead;
