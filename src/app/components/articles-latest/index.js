import React, { Component } from 'react';
import LazyImg from '../../elements/lazy-image'

class ArticlesLatestComponent extends Component {
  render() {
    const { items } = this.props;
    console.log(items);

    return (
      <div className="flex  flex-wrap">
        {items.map((item, i) => (
          <div key={i} className="col-24  col-12-sm  col-6-md">
            <figure>
              <LazyImg src="http://via.placeholder.com/200x200" alt="" />
              <figcaption>{item.title}</figcaption>
            </figure>
            <time pubdate datetime="2011-08-28" title="August 28th, 2011">{item._createdAt}</time>
            <address>{item.author.name}</address>
          </div>
        ))}
      </div>
    );
  }
}

export default ArticlesLatestComponent;
