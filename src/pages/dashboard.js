import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions/storyActions';
import Story from './components/story';
import SideStories from './components/SideStories';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';

const styles = {
  dashboard: {
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
    background: 'linear-gradient(#A5B5BD 0, #7B847B 100%)',
    maxHeight: window.innerHeight
  },
}

class Dashboard extends Component {

    constructor(props) {
     super(props);
    }

    componentDidMount() {
      this.setInterval(() => {
        this.props.iterate();
        console.log(this.props.stories.stories[this.props.currentStory] );
        this.props.updateSideStories(this.props.currentStory);
      }, 5000);
    }

    setSideStoriesStyles() {
      if(window.innerWidth < 1000)
          return false
        return true;
    }

    render() {
      return (
          <div style={styles.dashboard} className="dashboard">
            <Story story={ this.props.stories.stories[this.props.currentStory] } />
            {(() => {
               if (this.setSideStoriesStyles()) {
                  return <SideStories stories={ this.props.sideStories } />;
               }
             })()}
          </div>
      );
   }
}

ReactMixin.onClass(Dashboard, TimerMixin);

Dashboard.propTypes = {
    stories: PropTypes.object.isRequired,
    sideStories: PropTypes.array.isRequired,
    iterate: PropTypes.func.isRequired,
    updateSideStories: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        sideStories: state.sideStories.currentSideStories,
        stories: state.stories,
        currentStory: state.story.currentStory
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        iterate: () => {
            dispatch(actions.iterateStories());
        },
        updateSideStories: (currentStory) => {
            dispatch(actions.updateSideStories(currentStory));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
