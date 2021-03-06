import React, { Component } from 'react';
import SpotifyPlayer from 'react-spotify-player';

class SpotifyEmbed extends Component {
  render() {
    const { spotifyEmbed } = this.props;
    const size = { width: '100%', height: 120 };
    const view = 'coverart'; // or 'coverart'
    const theme = 'black'; // or 'white'

    return (
      <div className="w-80  mla  mra">
        <SpotifyPlayer
          uri={spotifyEmbed}
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    );
  }
}

export default SpotifyEmbed;
