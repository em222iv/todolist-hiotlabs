import { combineReducers, createStore } from 'redux';
import storiesReducer from './reducers/stories';
import initialState from './initialstate';

const reducers = combineReducers({
    stories: storiesReducer
});

const store = createStore(reducers, initialState());

export default store;
