import React, { Component } from 'react'

export class AddToDo extends Component {
    addTask = (e) => {
        e.preventDefault();
        this.props.addTask(this.inputField.value);
    }

    render() {
        return (
            <form className="form-inline mb-3">
                <input className="form-control" ref={elem => this.inputField = elem} type="text" placeholder="Add new task" />
                <input className="btn btn-outline-info" onClick={this.addTask} type="submit" value="Add" />
            </form>
        )
    }
}

export default AddToDo
