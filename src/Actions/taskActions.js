import { FETCH_TASKS, NEW_TASK } from "./types";
import axios from "axios";

export const fetchTasks = () => dispatch => {
  axios
    .get(process.env.API_URL)
    .then(tasks => {
      dispatch({
        type: FETCH_TASKS,
        payload: tasks
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const submitNewTask = taskData => dispatch => {
  console.log(taskData);
  axios
    .post("mongodb://peepee1:peepee1@ds159273.mlab.com:59273/partyboy")
    .then(task => {
      dispatch({
        type: NEW_TASK,
        payload: task
      });
    })
    .catch(err => {
      console.log(err);
    });
};
