import React, { Component,PropTypes } from 'react';
import Image from './story/image';

const styles = {
  SideStories: {
     minHeight:'100px',
     minWidth:'300px',
     flex: '1',
     margin:'20px',
     display: 'flex',
     flexFlow: 'row',
     flexWrap: 'wrap',
     overflow:'hidden',
  },
  imageStyle: {
    width:'25%'
  },
  h4: {
    textAlign:'center'
  }
}

class SideStories extends Component{

    render() {
      return  <div id="sideStories" style={Object.assign(styles.SideStories, this.props.styles) }>
        <h4 style={styles.h4}>Upcoming Stories</h4>
        <div>
        {this.props.stories.map((story) => {
           return <Image key={story.id} url={story.image_thumbnail_small} styles={ styles.imageStyle } />
         })}
        </div>
      </div>
    }

};


export default SideStories;
