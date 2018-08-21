import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimatedImage from '../../elements/animated-image'

class ArticlesList extends Component {
  render() {
    const { items } = this.props;
    const { padding } = this.props;

    return (
      <section className={`${padding}`}>
        {items.map((item, i) => (
          <article key={i} className="flex  flex-wrap  shadow2">
            <div className="col-8">
              <figure>
                <Link className="link  db" to={`/article/${item.slug.current}`}>
                  <AnimatedImage lazy={true} src={item.mainImage} alt={item.title} styles="trans-all-1  h4  w-100" />
                </Link>
              </figure>
            </div>

            <div className="col-16  ph2">
              <div className="pt2  mt2">
                <address className="t-body  f6  mid-grey  dib">{item.author.name}</address>
                <span className="t-body  f6  mid-grey  dib  ph1">|</span>
                <time className="t-body  f6  mid-grey  dib" dateTime={item.publishedAt}>{item.publishedAt.split('T')[0]}</time>
              </div>
              <Link className="link" to={`/article/${item.slug.current}`}>
                <p className="t-title  bold  f6  f5-md  black  pt1  pb2">{item.title}</p>
              </Link>
            </div>
          </article>
        ))}
      </section>
    );
  }
}

export default ArticlesList;
