import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class Todos extends Component {
  render() {
    const { tasks, toggleCompleted } = this.props;
    return (
      <React.Fragment>
        {tasks.map((elem, i) => {
          return <TodoItem key={i}
            task={elem}
            toggleCompleted={toggleCompleted}
            deleteTask={this.props.deleteTask} />
        })}
      </React.Fragment>
    );
  }
}
