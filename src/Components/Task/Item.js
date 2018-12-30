import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <tr>
        <td className="text-center">1</td>
        <td className="text-center">ReactJS</td>
        <td className="text-center">
          <i className="fa fa-circle" style={{ color: "#389E0D" }} />
          <i className="fa fa-circle" style={{ color: "#13C2C2" }} />
        </td>
        <td className="text-danger font-weight-bold text-center">High</td>
        <td className="text-center">
          <img src="./img/user_2.jpg" className="user" alt="" />
          <img src="./img/user_3.jpg" className="user" alt="" />
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-outline-primary">
            Modify
          </button>
          <button type="button" className="btn btn-outline-success">
            Finish
          </button>
          <button type="button" className="btn btn-outline-danger">
            Delete
          </button>
        </td>
        <td className="text-center">
          <i className="fa fa-check-square-o mr-2" />
        </td>
      </tr>
    );
  }
}

export default Item;
