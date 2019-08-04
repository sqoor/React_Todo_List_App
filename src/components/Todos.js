import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class Todos extends Component {
  render() {
    const { tasks, toggleCompleted } = this.props;
    return (
      <React.Fragment>
        <h6>Todos</h6>
        {tasks.map((elem, i) => <TodoItem key={i} task={elem} toggleCompleted={toggleCompleted} />)}
      </React.Fragment>
    );
  }
}
