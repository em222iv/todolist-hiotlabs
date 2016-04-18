import React, { Component,PropTypes } from 'react';

const styles = {
  date: {
    textAlign:'right',
    paddingLeft:'20px',
    paddingRight:'40px',
    position: 'absolute',
    fontSize: 'x-small',
    width: '100px',
    backgroundColor: 'rgba(235, 96, 5, 0.8)'
  }
}


class Date extends Component{
      render() {
        return  <div style={styles.date} ><p>{this.props.date}</p></div>
    }
};

export default Date;
