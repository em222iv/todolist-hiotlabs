import todoAPI from '../helpers/todoAPI'
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

todoAPI.getTodos().then(todos => {
   store.dispatch({
       type: C.GET_TODOS, todos
     })
}).catch((err) => {
  console.log('Error: ',err)
});

export default store;
