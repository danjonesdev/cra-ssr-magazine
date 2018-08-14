import React, { Component } from 'react';
import LazyImg from '../../elements/lazy-image'

class ArticlesLatestComponent extends Component {
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
                <LazyImg src={item.mainImage} alt={item.title} />
                <figcaption className="t-title  bold  f6  f5-md  pv2">{item.title}</figcaption>
              </figure>

              <address className="t-body  f7  f6-md  dib pb2">{item.author.name}</address>
              <span className="t-body  f7  f6-md  dib  ph2  pb2">|</span>
              <time className="t-body  f7  f6-md  dib pb2" pubdate={item.publishedAt} dateTime={item.publishedAt} title={item.publishedAt}>{item.publishedAt}</time>
              <p className="t-body  f7  f6-md">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default ArticlesLatestComponent;
