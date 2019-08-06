import React, { Component } from "react";
import Todos from "./components/Todos";
import AddToDo from "./components/AddToDo";

export default class App extends Component {
  state = {
    tasks: []
  };

  addTask = somethingToDo => {
    if (somethingToDo) {
      const newTask = {
        id: this.state.tasks.length + 1,
        title: somethingToDo,
        isCompleted: false
      };
      
      this.requestApi('/tasks', 'post', newTask);
    }
  };

  deleteTask = id => {
    this.requestApi(`/tasks/${id}`, 'delete');
  };

  toggleCompleted = (id, isCompleted) => {
    this.requestApi(`/tasks/${id}`, 'put', {isCompleted});
  };

  componentDidMount() {
    this.requestApi('/tasks', 'get')
  }

  requestApi(path, method, body) {
    fetch(path, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(
      result => {
        console.log(result);
        this.setState({tasks: result})
      },
      error => {
        console.log(error);
      }
    )
  }

  render() {
    const { tasks } = this.state;
    return (
      <div className="container mt-5 w-75">
        <AddToDo addTask={this.addTask} />
        <Todos
          tasks={tasks}
          toggleCompleted={this.toggleCompleted}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}
