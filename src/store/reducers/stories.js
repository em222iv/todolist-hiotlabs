import initialState from '../initialstate';

const storiesReducer = (state, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        default:
            return state || initialState().stories;
    }
};

export default storiesReducer;
