import { combineReducers } from "redux";
import posts from './post'
import loaderState from './loaderState'

export const reducers=combineReducers({posts:posts,loaderState:loaderState})