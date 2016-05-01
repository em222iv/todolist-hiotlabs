import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions/todosActions';

import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

class Wrapper extends Component {
    render() {
      return (
          <div className="wrapper">
            <div id="title">
              <h1>Todos</h1>
            </div>
            <Header />
            <Todos />
            <Footer />
          </div>
      );
   }
}


Wrapper.propTypes = {
    todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => {
            dispatch(actions.addTodo());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
