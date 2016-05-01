import initialState from '../initialstate';
import C from '../../constants';

const todosReducer = (state, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case C.ADD_TODO:
            return [{
                    id: state.length+1,
                    completed: false,
                    title: action.title
                },
                ...state
            ]

        default:
            return state || initialState().todos;
    }
};

export default todosReducer;
