import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';
import actions from '../../actions/todosActions';
import Sortable from 'react-sortablejs';
import Todo from './todo'

class Todos extends Component {

    sortableState(order) {
        this.props.order(order)
    }

    render() {
        return ( < div className = "todos" >
            < Sortable tag = "ul"
            onChange = {
                this.sortableState.bind(this)
            } > {
                this.props.todos.map((todo, key) => (
                  <Todo todo={todo} key = {
                          key 
                      } />
                )
              )
            } < /Sortable> < /div >
        );
    }
}


Todos.propTypes = {
    order: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch(actions.delete(id));
        },
        toggle: (id, completed) => {
            dispatch(actions.toggle(id, completed));
        },
        order: (order) => {
            dispatch(actions.order(order));
        },
        update: (id,title) => {
            dispatch(actions.update(id,title));
        },
    };
};

export default connect(undefined, mapDispatchToProps)(Todos);
