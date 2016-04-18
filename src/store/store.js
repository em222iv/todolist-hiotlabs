import { combineReducers, createStore } from 'redux';
import storiesReducer from './reducers/stories';
import currentStoryReducer from './reducers/currentStory';
import sideStoriesReducer from './reducers/sideStories';
import initialState from './initialstate';

const reducers = combineReducers({
    stories: storiesReducer,
    story: currentStoryReducer,
    sideStories: sideStoriesReducer,
});

const store = createStore(reducers, initialState());

export default store;
