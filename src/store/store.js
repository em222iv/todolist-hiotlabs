import api from '../helpers/apiCalls'
import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import todosReducer from './reducers/todosReducer';
import thunk from 'redux-thunk';
import initialState from './initialstate';
import C from '../constants';

const reducers = combineReducers({
    todos: todosReducer,
});
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers, initialState());



  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.
let todoPromise = api.getTodos();

todoPromise.then(response => {
  store.dispatch(setInitialState(response));
})

function setInitialState(response) {
    return {
      type: C.GET_TODOS, response
    }
};


export default store;
