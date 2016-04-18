import React, { Component,PropTypes } from 'react';

const styles = {
  person: {
    width:'60px',
    height:'40px',
    diplay:'inline',
    float:'right',
    margin:'10px',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
    display:'block'
  }
}


class ContactPerson extends Component{
    render() {
       return <div style={ Object.assign( styles.person, {backgroundImage:'url(' + this.props.url +')'} ) }></div>
    }
};

export default ContactPerson;
