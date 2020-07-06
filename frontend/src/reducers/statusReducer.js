import { SHOW_ERROR, RESET_ERROR, START_LOAD, RESET_LOAD } from './actionTypes';


const INIT_STATE = { isLoading: false, error: "" };

function statusReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return { ...state, error: action.msg };

    case RESET_ERROR:
      return { ...state, error: "" };

    case START_LOAD:
      return { ...state, isLoading: true };

    case RESET_LOAD:
      return { ...state, isLoading: false };

    default:
      return state;
  }
}


export default statusReducer;