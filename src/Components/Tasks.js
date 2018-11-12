import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import { connect } from "react-redux";
import { fetchTasks } from "../Actions/taskActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    const { tasks } = this.props;

    // FIGURE OUT HOW TO ADD A LOADING SCREEN IF YOU HAVE TIME
    if (!tasks) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Your current tasks</h1>
        {Object.keys(tasks).map(task => {
          return (
            <Task
              title={tasks[task].title}
              description={tasks[task].description}
              tags={tasks[task].tags}
              key={tasks[task].id}
            />
          );
        })}
      </div>
    );
  }
}

Tasks.propTypes = {
  fetchTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks
});

export default connect(
  mapStateToProps,
  { fetchTasks }
)(Tasks);
