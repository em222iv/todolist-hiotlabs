import React, { Component,PropTypes } from 'react';

const styles = {
  tag: {
    float:'left',
    height:'60px',
    backgroundColor: 'rgba(215, 56, 74, 0.6)',
    paddingLeft:'10px',
    paddingRight:'10px',
    fontWeight:'900'
  }
}

class Tag extends Component{
      render() {
        return  <div style={styles.tag}><p>{this.props.text}</p></div>
    }
};

export default Tag;
