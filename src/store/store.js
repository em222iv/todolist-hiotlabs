import { combineReducers, createStore } from 'redux';
import todosReducer from './reducers/todosReducer';
import initialState from './initialstate';

const reducers = combineReducers({
    todos: todosReducer,
});

const store = createStore(reducers, initialState());

export default store;
