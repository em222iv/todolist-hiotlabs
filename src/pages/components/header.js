import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';
import actions from '../../actions/todosActions';

class Header extends Component {

    handleClick(title) {
      this.props.add(document.getElementById('add').value);
    }

    render() {
      return (
          <div className="header">
            <input id="add" placeholder="What needs to be done?"/>
            <button onClick={this.handleClick.bind(this)} type="button">Add Todo</button>
          </div>
      );
    }
}


Header.propTypes = {
    add: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (title) => {
            dispatch(actions.add(title));
        },
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
