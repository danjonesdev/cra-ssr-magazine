import React, { Component } from 'react';
import Iframe from 'react-iframe'

class Soundcloud extends Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Iframe url="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/97143878&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          width="100%"
          height="200px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
          allowFullScreen/>
      </React.Fragment>
    );
  }
}

export default Soundcloud;
