import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';
import actions from '../../actions/todosActions';
import Sortable from 'react-sortablejs';


class Todos extends Component {

    deleteTodo(todoID) {
        this.props.delete(todoID)
    }

    toggleTodo(todoID, completed) {
        this.props.toggle(todoID, completed)
    }

    sortableState(order) {
        this.props.order(order)
    }

    render() {
        const simpleList = this.props.todos.map((todo, key) => ( < li key = {
                key
            }
            className = {
                todo.completed ? "completed" : "clear"
            }
            data-id = {
                todo.id
            }
            onDoubleClick = {
                this.deleteTodo.bind(this, todo.id)
            } > {
                todo.title
            } < input onChange = {
                this.toggleTodo.bind(this, todo.id, todo.completed)
            }
            checked = {
                todo.completed
            }
            className = "completeToggler"
            type = "checkbox" / >
            <div className="sortIcon"></div> < /li >
        ));
        return ( < div className = "todos" >
            < Sortable tag = "ul" // Defaults to "div"
            onChange = {
                this.sortableState.bind(this)
            } > {
                simpleList
            } < /Sortable> < /div >
        );
    }
}


Todos.propTypes = {
    order: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
