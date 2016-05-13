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
        return ( < div className = "footer" >
            < div id = "itemLeft" > {
                this.props.itemsToComplete
            } items left < /div> < div id = "markAll" > {
                (() => {
                    if (this.props.itemsToComplete == 0) {
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
    completeAll: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
    itemsToComplete: PropTypes.number.isRequired
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

export default connect(undefined, mapDispatchToProps)(Footer);
