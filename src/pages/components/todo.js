import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';
import actions from '../../actions/todosActions';
import Sortable from 'react-sortablejs';

class todo extends Component {

    deleteTodo(todoID,e) {
      if(e.target.className !== 'completeToggler')
        this.props.delete(todoID)
    }

    toggleTodo(todoID) {
        this.props.toggle(todoID)
    }

    updateTodo(id,e) {
        this.props.update(id,e.target.value)
    }

    updateDone(e) {
        e.target.value = '';
    }

    render() {
        return ( < li
            className = {
                this.props.todo.completed ? "completed" : "clear"
            }
            data-id = {
                this.props.todo.id
            }
            onDoubleClick = {
                this.deleteTodo.bind(this, this.props.todo.id)
            } ><input onChange = {
                this.updateTodo.bind(this, this.props.todo.id)
            }
            onBlur = {
                this.updateDone.bind(this)
            }
            className="titleInput"
            placeholder={
                this.props.todo.title
            } />< input onChange={
                this.toggleTodo.bind(this, this.props.todo.id, this.props.todo.completed)
            }
            checked = {
                this.props.todo.completed
            }
            className = "completeToggler"
            type = "checkbox" / >
            <div className="sortIcon"></div> < /li >
        );
    }
}


todo.propTypes = {
    toggle: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (id) => {
            dispatch(actions.delete(id));
        },
        toggle: (id, completed) => {
            dispatch(actions.toggle(id, completed));
        },
        update: (id,title) => {
            dispatch(actions.update(id,title));
        },
    };
};

export default connect(undefined, mapDispatchToProps)(todo);
