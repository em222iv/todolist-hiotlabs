import React, { Component,PropTypes } from 'react';

const styles = {
  summary: {
    textAlign:'center',
    paddingLeft:'40px',
    paddingRight:'40px',
  }
}


class Summary extends Component{
      render() {
        return  <p style={styles.summary} >{this.props.text}</p>
    }
};

export default Summary;
