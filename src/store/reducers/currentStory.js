import initialState from '../initialstate';
import C from '../../constants';

const CurrentStoryReducer = (state, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case C.NEXT_STORY:
            newState.currentStory += 1;
            return newState;
        default:
            return state || initialState().story;
    }
};

export default CurrentStoryReducer;
