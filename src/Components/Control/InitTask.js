import React, { Component } from 'react';

class InitTask extends Component {
    render() {
        return (
            <button
            type="button"
            className="btn btn--initTask"
            data-toggle="modal"
            data-target="#modalTask"
          >
            <i className="fa fa-pencil-square-o" />
            Init tasks
          </button>
        );
    }
}

export default InitTask;
