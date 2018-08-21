import React, { Component } from 'react';
import YouTube from 'react-youtube';

class YouTubeEmbed extends Component {
  render() {
    const { youTubeEmbed } = this.props;

    return (
      <div className="w-80  mla  mra">
        <YouTube
          videoId={youTubeEmbed}
          className="w-100  h8"
        />
      </div>
    );
  }
}

export default YouTubeEmbed;
