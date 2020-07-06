import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import titlesReducer from './titlesReducer';
import statusReducer from './statusReducer';

export default combineReducers({ posts: postsReducer, titles: titlesReducer, status: statusReducer });
