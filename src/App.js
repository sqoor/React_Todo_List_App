import React, { Component } from 'react';
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Download Zoom",
        isCompleted: false
      },
      {
        id: 2,
        title: "Eat Fried Chicken",
        isCompleted: true
      },
      {
        id: 3,
        title: "Play Games",
        isCompleted: false
      },
      {
        id: 4,
        title: "Go for Shopping",
        isCompleted: false
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };

  addTask = (somethingToDo) => {
    if (somethingToDo) {
      const newTask = {
        id: this.state.tasks.length + 1,
        title: somethingToDo,
        isCompleted: false
      }

      this.setState({
        tasks: [...this.state.tasks, newTask]
      });
    }
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    });
  }

  toggleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(element => {
        if (element.id === id) {
          element.isCompleted = !element.isCompleted
        }
        return element;
      })
    })
  }
  render() {
    const { tasks } = this.state;
    return (
      <div className="container mt-5">
        <AddToDo addTask={this.addTask} />
        <Todos
          tasks={tasks}
          toggleCompleted={this.toggleCompleted}
          deleteTask={this.deleteTask}
        />
      </div >
    );
  }
}