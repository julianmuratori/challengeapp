import { FETCH_TASKS, NEW_TASK } from "./types";
import axios from "axios";

export const fetchTasks = () => dispatch => {
  axios
    .get(process.env.API_URL)
    .then(tasks => {
      console.log(tasks);
      dispatch({
        type: FETCH_TASKS,
        // Rewriting this as tasks.data, but delete data if it breaks
        payload: tasks.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const submitNewTask = taskData => dispatch => {
  axios
    .post(
      "https://private-anon-9b7d8eba0d-cycuradevtest.apiary-mock.com/tasks",
      {
        title: taskData.title,
        description: taskData.description,
        tags: taskData.tags
      }
    )
    .then(task => {
      console.log(task);
      dispatch({
        type: NEW_TASK,
        payload: task.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
