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

    deleteTodo(todoID,e) {
      console.log(e.target.className);
      if(e.target.className != 'titleInput' || e.target.className != 'completeToggler')
        this.props.delete(todoID)
    }

    toggleTodo(todoID) {
        this.props.toggle(todoID)
    }

    sortableState(order) {
        this.props.order(order)
    }

    updateTodo(id,e) {
        if(e.target.value !== '')
          this.props.update(id,e.target.value)
    }

    render() {
        const todoList = this.props.todos.map((todo, key) => ( < li key = {
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
            } ><input onChange = {
                  this.updateTodo.bind(this,todo.id)
              }
            className="titleInput" placeholder={
                todo.title
            } />< input onChange = {
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
                todoList
            } < /Sortable> < /div >
        );
    }
}


Todos.propTypes = {
    order: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired,
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
