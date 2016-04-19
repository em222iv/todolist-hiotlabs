import React, { Component,PropTypes } from 'react';
import Image from './story/image';
import Header from './story/header';
import Summary from './story/summary';
import Date from './story/date';
import Tag from './story/tag';
import ContactPerson from './story/contactPerson';
import Type from './story/type';

const styles = {
  story: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    float: 'left',
    position: 'relative',
    padding:'20px',
    maxWidth: document.innerWidth/2,
    width:'100%',
    minHeight: window.innerHeight-40,
    margin:'auto',
    storyContent: {
      backgroundColor: 'rgba(4, 44, 44, 0.5)',
      float:'left',
      color:'white',
      overflow:'scroll',
      minHeight:(window.innerHeight/2)-100,
      maxHeight:(window.innerHeight/2)-100,
    },
    storyImage: {
      zIndex:'100'
    },
    storyInfoPanel: {
      backgroundColor:'white',
      width:'100%',
      maxHeight:'60px'
    }
  },
  imageStyle: {
    width:'100%',
    maxHeight: (window.innerHeight/2)-25
  }
}



class Story extends Component{
    render() {
      return  (
        <div style={styles.story} className="story">
            <div style={styles.story.storyImage}>
              <Date date={this.props.story.created_at} />
              <Image url={this.props.story.image} styles={ styles.imageStyle } />
            </div>
            <div style={styles.story.storyInfoPanel}>
              <Tag text={this.props.story.tags.tag} />
              <Type text={this.props.story.type_of_media} />
              {this.props.story.contact_people.contact_person.map((person) => {
                 return <ContactPerson url={person.image_thumbnail_small} />
               })}
            </div>
            <div style={styles.story.storyContent}>
              <Header title={this.props.story.header} />
              <Summary text={this.props.story.summary} />
            </div>
        </div>
    )
  }
};

export default Story;
