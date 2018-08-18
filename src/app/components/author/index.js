import React, { Component } from 'react';

class Author extends Component {
  render() {
    const { profile } = this.props;
    const { padding } = this.props;

    console.log(profile);
    return (
      <section className={`container-medium  mla  mra  ${padding}`}>
        <div className="flex  flex-wrap">
          <p>{profile.description}</p>
        </div>
      </section>
    );
  }
}

export default Author;
