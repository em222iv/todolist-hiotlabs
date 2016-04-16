import React, { Component,PropTypes } from 'react';
import Dashboard from './dashboard';

class Wrapper extends Component{
      render() {
        return (
            <div className="wrapper">
                {this.props.children}
                <Dashboard />
            </div>
        );
    }
};

export default Wrapper;
