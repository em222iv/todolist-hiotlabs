import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions/storiesActions';
// import readFile from '../utils/readFile'
import Story from './components/story'

const fakeData = { header: "Story 1", summary:"summary text here", date:"2016-22-11" };

class Dashboard extends Component {

    constructor(props) {
     super(props);
     this.state = { story: this.props.stories.stories[0] };
     console.log(this.state.story);
    }

    render() {
        return (
            <div className="dashboard">
              <Story story={ this.state.story } />
            </div>
        );
    }
}

Dashboard.propTypes = {
    stories: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        points: state.points,
        stories: state.stories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(actions.pointsIncrease());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
