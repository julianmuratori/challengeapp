import { FETCH_TASKS, NEW_TASK } from "../Actions/types";

const initialState = {
  tasks: {},
  task: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        tasks: action.payload,
        task: state.task
      };
    case NEW_TASK:
      return {
        ...state,
        task: action.payload
      };
    default:
      return state;
  }
};
