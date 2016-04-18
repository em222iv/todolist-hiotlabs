import data from '../../fixtures/stories.json';
export default () => {
    return {
        stories:{
          stories: data.stories
        },
        story: {
          currentStory: 0,
        },
        sideStories: {
          currentSideStories: data.stories.slice(1,25),
        }
    }
};
