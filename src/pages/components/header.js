import {
    connect
} from 'react-redux';
import React, {
    PropTypes,
    Component
} from 'react';
import actions from '../../actions/todosActions';

class Header extends Component {

    addTodo(title) {
        let em = document.getElementById('add');
        this.props.add(em.value);
        em.value = "";
    }

    render() {
        return ( < div className = "header" >
            < input id = "add"
            placeholder = "What needs to be done?" / >
            < button onClick = {
                this.addTodo.bind(this)
            }
            type = "button" > Add Todo < /button> < /div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
