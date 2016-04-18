import initialState from '../initialstate';
import C from '../../constants';

const SideStoriesReducer = (state, action) => {
    const newState = Object.assign({}, state);
    switch (action.type) {
        case C.UPDATE_SIDESTORIES:
            let start = action.currentStory+1;
            let end = action.currentStory+25;
            newState.currentSideStories = initialState().stories.stories.slice(start,end);
            return newState;
        default:
            return state || initialState().sideStories;
    }
};

export default SideStoriesReducer;
