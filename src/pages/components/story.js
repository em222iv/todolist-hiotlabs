import React, { Component,PropTypes } from 'react';
import Image from './story/image';
import Header from './story/header';
import Summary from './story/summary';
import Date from './story/date';

class Story extends Component{
      render() {
        return  (
          <div className="story">
            <Image url={this.props.story.image_thumbnail_large}/>
            <Header title={this.props.story.header} />
            <Summary text={this.props.story.summary} />
            <Date date={this.props.story.updated_at} />
          </div>
      )
    }
};

export default Story;
