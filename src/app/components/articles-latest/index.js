import React, { Component } from 'react';
import LazyImg from '../../elements/lazy-image'

class ArticlesLatestComponent extends Component {
  render() {
    const { items } = this.props;
    const { padding } = this.props;
    console.log(items);

    return (
      <section className={`flex  flex-wrap  ${padding}`}>
        {items.map((item, i) => (
          <article key={i} className="col-24  col-12-sm  col-6-md">
            <figure>
              <LazyImg src={item.mainImage} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
            <time pubdate={item.publishedAt} dateTime={item.publishedAt} title={item.publishedAt}>{item.publishedAt}</time>
            <address>{item.author.name}</address>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default ArticlesLatestComponent;
