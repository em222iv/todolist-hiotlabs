import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';


class Todo extends Component {

    render() {
        return (
          < li key = {
                 this.props.key
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
        )
    }
}

export default Todo
