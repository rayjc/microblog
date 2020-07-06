import { LOAD_TITLES, ADD_TITLES, UPDATE_TITLES, REMOVE_TITLES } from './actionTypes';


function titlesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TITLES:
      return [...action.titles];

    case ADD_TITLES:
      return [...state, action.title];

    case UPDATE_TITLES:
      return state.reduce((allTitles, title) => {
        if (title.id === action.title.id) {
          allTitles.push({ ...action.title });
        } else {
          allTitles.push({ ...title });
        }
        return allTitles;
      }, [])

    case REMOVE_TITLES:
      return state.filter(title => title.id !== action.id);

    default:
      return state;
  }
}


export default titlesReducer;