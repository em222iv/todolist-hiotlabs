import C from '../constants';

export default {
    iterateStories(){
        return {
          type: C.NEXT_STORY,
        };
    },
    updateSideStories(_currentStory){
        return {
          type: C.UPDATE_SIDESTORIES,
          currentStory: _currentStory
        };
    }
};
