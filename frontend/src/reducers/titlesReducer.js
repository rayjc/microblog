import { LOAD_TITLES, ADD_TITLE, UPDATE_TITLE, REMOVE_TITLE, UPDATE_TITLE_VOTE } from './actionTypes';


function titlesReducer(state = null, action) {
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

    case UPDATE_TITLE_VOTE:
      return state.reduce((allTitles, title) => {
        if (title.id === action.postId) {
          const { votes } = title;
          const newVotes = action.isIncrement ? votes + 1 : votes - 1;
          allTitles.push({ ...title, votes: newVotes });
        } else {
          allTitles.push({ ...title });
        }
        return allTitles;
      }, []);

    default:
      return state;
  }
}


export default titlesReducer;