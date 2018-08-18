import React, { Component } from 'react';
import FacebookProvider, { EmbeddedVideo } from 'react-facebook';

class YouTubeEmbed extends Component {
  render() {
    const { facebookVideoEmbed } = this.props;

    return (
      <div className="w-80  mla  mra">
        <FacebookProvider appId="619613621773409">
          <EmbeddedVideo href={facebookVideoEmbed} />
        </FacebookProvider>
      </div>
    );
  }
}

export default YouTubeEmbed;
