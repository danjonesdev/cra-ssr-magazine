import React, { Component } from 'react';
import Iframe from 'react-iframe'

class SoundCloud extends Component {
  render() {
    const { soundCloudEmbed } = this.props;

    return (
      <div className="w-80  mla  mra">
        <Iframe
          url={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/${soundCloudEmbed}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          width="100%"
          height="200px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>
      </div>
    );
  }
}

export default SoundCloud;
