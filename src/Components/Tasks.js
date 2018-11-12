import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import { connect } from "react-redux";
import { fetchTasks } from "../Actions/taskActions";

class Tasks extends Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  checkForNewTask = props => {
    if (!props.task.feed) {
      return <h1>no</h1>;
    }
    // Object.keys(task.feed).map(info => {
    //   return (
    //     <Task
    //       title={task.feed[info].title}
    //       description={task.feed[info].description}
    //       tags={task.feed[info].tags}
    //       key={task.feed[info].id}
    //     />
    //   );
    // })
  };

  render() {
    const { tasks, task } = this.props;

    // FIGURE OUT HOW TO ADD A LOADING SCREEN IF YOU HAVE TIME
    if (!tasks) {
      return <h1>Loading...</h1>;
    } else if (!task.feed) {
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
    } else {
      return (
        <div>
          <h1>My New Task</h1>
          {Object.keys(task).map(info => {
            return (
              <Task
                title={task.feed.title}
                description={task.feed.description}
                tags={task.feed.tags}
                key={task.feed.id}
              />
            );
          })}
        </div>
      );
    }
  }
}

Tasks.propTypes = {
  fetchTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks.tasks,
  task: state.tasks.task
});

export default connect(
  mapStateToProps,
  { fetchTasks }
)(Tasks);
