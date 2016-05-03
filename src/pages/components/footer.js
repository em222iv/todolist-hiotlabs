import React, {
    Component,
    PropTypes
} from 'react';
import {
    connect
} from 'react-redux';
import actions from '../../actions/todosActions';

class Footer extends Component {

    completeAll(e) {
        e.preventDefault()
        this.props.completeAll();
    }

    clearAll(e) {
        e.preventDefault()
        this.props.clearAll();
    }

    render() {
        let itemsLeft = 0;
        this.props.todos.map(todo => {
            if (!todo.completed)
                itemsLeft++;
        })
        return ( < div className = "footer" >
            < div id = "itemLeft" > {
                itemsLeft
            } items left < /div> < div id = "markAll" > {
                (() => {
                    if (itemsLeft == 0) {
                        return <a href = ""
                        onClick = {
                            this.clearAll.bind(this)
                        } > Unmark all completed  < /a>
                    } else  {
                        return <a href = ""
                        onClick = {
                            this.completeAll.bind(this)
                        } > Mark all as completed < /a>
                    }

                })()
            }

            < /div > < /div>
        );
    }

}

Footer.propTypes = {
    completeAll: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        completeAll: () => {
            dispatch(actions.completeAll());
        },
        clearAll: () => {
            dispatch(actions.clearAll());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
