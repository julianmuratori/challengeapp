import { FETCH_TASKS, NEW_TASK, TAGS } from "../Actions/types";

const initialState = {
  tasks: {},
  tags: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        state,
        tasks: action.payload
      };
    case NEW_TASK:
      return {
        state,
        item: action.payload
      };
    default:
      return state;
  }
};
