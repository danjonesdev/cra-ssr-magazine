import React, { Component } from 'react';

import Para from '../../components/article/para';
import Bullet from '../../components/article/bullet';
import Number from '../../components/article/number';
import SoundCloud from '../../components/article/soundcloud';
import Spotify from '../../components/article/spotify';
import YouTubeEmbed from '../../components/article/youtube-embed';
import FacebookVideoEmbed from '../../components/article/facebook-video-embed';


class ArticleSections extends Component {
  renderSections = (section, i) => {

    // para
    if (section._type === 'block' && !section.listsection) {
      return (
        <div key={i}>
          <Para children={section.children} />
        </div>
      );
    }

    // bullet list
    if (section._type === 'block' && section.listsection === 'bullet') {
      return (
        <ul key={i}>
          <Bullet children={section.children} />
        </ul>
      );
    }

    // number list
    if (section._type === 'block' && section.listsection === 'number') {
      return (
        <ul key={i}>
          <Number children={section.children} />
        </ul>
      );
    }

    // soundcloud embed
    if (section._type === 'soundCloudEmbedBlock') {
      return (
        <div key={i} className="pv4">
          <SoundCloud soundCloudEmbed={section.soundCloudEmbed} />
        </div>
      );
    }

    // soundcloud embed
    if (section._type === 'spotifyEmbedBlock') {
      return (
        <div key={i} className="pv4">
          <Spotify spotifyEmbed={section.spotifyEmbed} />
        </div>
      );
    }

    // soundcloud embed
    if (section._type === 'youTubeEmbedBlock') {
      return (
        <div key={i} className="pv4">
          <YouTubeEmbed youTubeEmbed={section.youTubeEmbed} />
        </div>
      );
    }

    // facebook video embed
    if (section._type === 'facebookVideoEmbedBlock') {
      return (
        <div key={i} className="pv4">
          <FacebookVideoEmbed facebookVideoEmbed={section.facebookVideoEmbed} />
        </div>
      );
    }
  }

  render() {
    const { body } = this.props;
    console.log(body);

    return (
      <React.Fragment>
        {body.map((section, i) => (
          this.renderSections(section, i)
        ))}
      </React.Fragment>
    );
  }
}

export default ArticleSections;
