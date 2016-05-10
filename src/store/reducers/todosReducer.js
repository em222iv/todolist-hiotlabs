import initialState from '../initialstate';
import C from '../../constants';
import fetch from 'react-fetch';

const todosReducer = (state, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {

        case C.GET_TODOS:
            return action.todos

        case C.ADD_TODO:
            return [action.todo,
                ...state
            ]

        case C.UPDATE_TODO:
            return state.map((todo) => {
                if (todo.id == action.id)
                    return Object.assign({}, todo, {
                        title: action.title
                    })
                return todo
            })

        case C.DELETE_TODO:
            return state.filter((todo) => {
                if (todo.id != action.id)
                    return todo
            })

        case C.COMPLETE_TODO:
            return state.map((todo) => {
                if (todo.id == action.id)
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                return todo
            })

        case C.COMPLETE_TODOS:
            return state.map(todo => {
                return Object.assign({}, todo, {
                    completed: true
                })
            })

        case C.CLEAR_COMPLETED:
            return state.map(todo => {
                return Object.assign({}, todo, {
                    completed: false
                })
            })

        case C.TODOS_ORDER:
            return action.order.map(todoId => {
                return state.filter(todo => {
                    if (todo.id == todoId)
                        return todo
                })[0]
            })

        default:
            return state || initialState().todos;
    }
};

export default todosReducer;
