import { connect } from 'react-redux';
import React, { PropTypes, Component } from 'react';
import actions from '../actions/todosActions';

import Header from './components/header';
import Todos from './components/todos';
import Footer from './components/footer';

class Wrapper extends Component {
    render() {
      let itemsToComplete = 0;
      this.props.todos.map(todo => {
          if (!todo.completed)
              itemsToComplete++;
      })
      return (
          <div className="wrapper">
            <div id="title">
              <h1>Todos</h1>
            </div>
            <Header />
            <Todos todos={this.props.todos}/>
            <Footer itemsToComplete={itemsToComplete}/>
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

export default connect(mapStateToProps)(Wrapper);
