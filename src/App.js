import React, { Component } from "react";
import "./App.css";
import PropTypes from 'prop-types';
import { getTask, addTask, editTask, deleteTask } from './Redux/action';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      taskName: "",
      taskDescription: ""
    };
  }

  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getTask();
  }

  submitData = () => {
    if (this.state.taskName && this.state.taskLabel && !this.state.id) {
      const newTask = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        taskName: this.state.taskName,
        taskLabel: this.state.taskLabel,
      };

      this.props.addTask(newTask);
    } else if (this.state.taskName && this.state.taskLabel && this.state.id) {
      const updatedDetails = {
        id: this.state.id,
        taskName: this.state.taskName,
        taskLabel: this.state.taskLabel,
      };

      this.props.editTask(updatedDetails);
    } else {
      alert('Enter Task Details.');
    }

    this.clearData();
  }

  editDetails = (data) => {
    this.setState({
      id: data.id,
      taskName: data.taskName,
      taskLabel: data.taskLabel
    })
  }

  deleteTask = (id) => {
    this.clearData();
    if (window.confirm("delete the task?")) {
      this.props.deleteTask(id);
    }
  }

  handleNameChange = (e) => {
    this.setState({
      taskName: e.target.value
    });
  }

  handleLabelChange = (e) => {
    this.setState({
      taskLabel: e.target.value
    });
  }

  clearData = () => {
    this.setState({
      id: 0,
      taskName: "",
      taskLabel: ""
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Application</h1>
        </header>
        <p className="App-intro">
          <div className="leftsection">
            Task Name : <input onChange={this.handleNameChange} value={this.state.taskName} type="text" placeholder="Task Name" /> <br />
            Task Label :  <input onChange={this.handleLabelChange} value={this.state.taskLabel} type="text" placeholder="Task Description" /><br />
            {this.state.id ? <button onClick={this.submitData}>UPDATE TASK</button> : <button onClick={this.submitData}>ADD TASK</button>}   <button onClick={this.clearData}>CLEAR TASK</button>
          </div>
          <div className="rightsection">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Tasks</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.props.tasks && this.props.tasks.map((data, index) => {
                  return <tr key={(index + 1)}>
                    <td>{(index + 1)}</td>
                    <td>{data.taskName}</td>
                    <td>{data.taskLabel}</td>
                    <td><button onClick={() => this.editDetails(data)}>EDIT TASK</button> <button onClick={() => this.deleteTask(data.id)}>DELETE TASK</button> </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, { getTask, addTask, editTask, deleteTask })(App);
