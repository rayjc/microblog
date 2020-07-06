import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import titlesReducer from './titlesReducer';

export default combineReducers({ posts: postsReducer, titles: titlesReducer });
