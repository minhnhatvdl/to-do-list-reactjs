import React, { Component } from "react";

class FilterStatus extends Component {
  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">
          Filter
          <li className="py-1 display-5 lead">
            <i className="fa fa-coffee mr-2" />
            Not yet started
          </li>
          <li className="py-1 display-5 lead">
            <i className="fa fa-spinner mr-2" />
            In process
          </li>
          <li className="py-1 display-5 lead">
            <i className="fa fa-check-square-o mr-2" />
            Finish
          </li>
          <li className="py-1 display-5 lead">
            <i className="fa fa-trash-o mr-2" />
            Cancel
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterStatus;
