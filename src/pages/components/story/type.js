import React, { Component,PropTypes } from 'react';

const styles = {
  tag: {
    float:'left',
    height:'60px',
    backgroundColor: 'rgba(158, 177, 74, 0.6)',
    paddingLeft:'10px',
    paddingRight:'10px',
    fontWeight:'900'
  }
}

class Type extends Component{
      render() {
        return  <div style={styles.tag}><p>{this.props.text}</p></div>
    }
};

export default Type;
