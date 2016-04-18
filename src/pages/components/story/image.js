import React, { Component,PropTypes } from 'react';

class Image extends Component{
    render() {
       return <img style={this.props.styles} src={this.props.url} />
    }
};

export default Image;
