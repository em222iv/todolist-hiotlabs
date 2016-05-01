import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';
import actions from '../../actions/todosActions';

class Todos extends Component {

    render() {

        return ( < div className = "todos" >
            < ul > {
                this.props.todos.map((todo) => {
                    return <li key = {
                        todo.id
                    } ><input className="complete" type="checkbox"/>
                    {
                        todo.title
                    }
                    < /li>
                })
            } < /ul> < /div>
        );
    }
}


Todos.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
