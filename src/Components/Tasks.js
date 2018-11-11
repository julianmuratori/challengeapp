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

    // FIGURE OUT HOW TO ADD A LOADING SCREEN
    if (!tasks) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <h1>Your current tasks</h1>
        {tasks.map(task => {
          return (
            <Task
              title={task.title}
              description={task.description}
              tags={task.tags}
              key={task.id}
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
  tasks: state.tasks.tasks.data
});

export default connect(
  mapStateToProps,
  { fetchTasks }
)(Tasks);
