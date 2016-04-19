import React, { Component,PropTypes } from 'react';

const styles = {
  header: {
    textAlign:'center',
    paddingLeft:'40px',
    paddingRight:'40px',
  }
};

class Header extends Component{
      render() {
        return  <div style={styles.header} ><h3>{this.props.title}</h3></div>
    }
};

export default Header;
