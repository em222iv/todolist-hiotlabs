import React, { Component,PropTypes } from 'react';

class Image extends Component{
      render() {
        return  <img src={this.props.url}/>
    }
};

export default Image;
