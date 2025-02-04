import React, { Component } from 'react';

export default class TodoItem extends Component {

  render() {
    const { id, title, isCompleted } = this.props.task;

    return (
      <React.Fragment>
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input checked={isCompleted} type="checkbox" onChange={this.props.toggleCompleted.bind(this, id, !isCompleted)} />
          {' '}
          {title}
          <button onClick={this.props.deleteTask.bind(this, id)} className="float-right btn btn-outline-danger">X</button>
          </p>
      </React.Fragment>

    );
  }
}