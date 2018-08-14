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
                  <LazyImg src={item.mainImage} alt={item.title} styles="w-100  h6" />
                  <figcaption className="t-title  bold  f5  black  pv2  card__title  --articlesGrid">{item.title}</figcaption>
                </Link>
              </figure>

              <address className="t-body  f6  black  dib  pb2">{item.author.name}</address>
              <span className="t-body  f6  black  dib  ph2  pb2">|</span>
              <time className="t-body  f6  black  dib  pb2" pubdate={item.publishedAt} dateTime={item.publishedAt} title={item.publishedAt}>{item.publishedAt}</time>
              <p className="t-body  f6  black  rel  card__description  --articlesGrid">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default ArticlesGrid;
