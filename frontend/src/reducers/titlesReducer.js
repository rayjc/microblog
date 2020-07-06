import { LOAD_TITLES, ADD_TITLE, UPDATE_TITLE, REMOVE_TITLE } from './actionTypes';


function titlesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_TITLES:
      return [...action.titles];

    case ADD_TITLE:
      return [...state, action.title];

    case UPDATE_TITLE:
      return state.reduce((allTitles, title) => {
        if (title.id === action.title.id) {
          allTitles.push({ ...action.title });
        } else {
          allTitles.push({ ...title });
        }
        return allTitles;
      }, []);

    case REMOVE_TITLE:
      return state.filter(title => title.id !== action.id);

    default:
      return state;
  }
}


export default titlesReducer;