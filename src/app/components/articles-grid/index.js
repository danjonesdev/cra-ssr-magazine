import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LazyImg from '../../elements/lazy-image'

class ArticlesGrid extends Component {
  render() {
    const { items } = this.props;
    const { padding } = this.props;
    console.log(items);

    return (
      <section className={`container  mla  mra  ${padding}`}>
        <div className="flex  flex-wrap">
          {items.map((item, i) => (
            <article key={i} className="col-24  col-12-sm  col-6-md  pa3">
              <figure>
                <Link className="link" to={`/article/${item.slug.current}`}>
                  <LazyImg src={item.mainImage} alt={item.title} styles="w-100" />
                </Link>
              </figure>

              <div className="pt2">
                <address className="t-body  f6  mid-grey  dib">{item.author.name}</address>
                <span className="t-body  f6  mid-grey  dib  ph1">|</span>
                <time className="t-body  f6  mid-grey  dib" dateTime={item.publishedAt}>{item.publishedAt.split('T')[0]}</time>
              </div>
              <Link className="link" to={`/article/${item.slug.current}`}>
                <p className="t-title  bold  f5  black  pt1  pb2">{item.title}</p>
              </Link>
              <p className="t-body  f6  mid-grey  rel">{item.description.substring(0, 150)}...</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default ArticlesGrid;
