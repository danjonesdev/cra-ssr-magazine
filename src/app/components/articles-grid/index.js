import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimatedImage from '../../elements/animated-image';

class ArticlesGrid extends Component {
  render() {
    const { items } = this.props;
    const { padding } = this.props;

    return (
      <section className={`container-medium  mla  mra  ${padding}`}>
        <div className="flex  flex-wrap">
          {items.map((item, i) => (
            <article key={i} className="col-24  col-12-sm  col-6-md  pa3">
              <figure>
                <Link
                  className="link  db  shadow2"
                  to={`/article/${item.slug.current}`}
                >
                  <AnimatedImage
                    lazy
                    src={item.mainImage}
                    alt={item.title}
                    styles="trans-all-1  h7  h9-sm  w-100"
                  />
                </Link>
              </figure>

              <div className="pt2  mt2">
                <address className="t-body  f6  mid-grey  dib">
                  {item.author.name}
                </address>
                <span className="t-body  f6  mid-grey  dib  ph1">|</span>
                <time
                  className="t-body  f6  mid-grey  dib"
                  dateTime={item.publishedAt}
                >
                  {item.publishedAt.split('T')[0]}
                </time>
              </div>
              <Link className="link" to={`/article/${item.slug.current}`}>
                <p className="t-title  bold  f6  f5-md  black  pt1  pb2">
                  {item.title}
                </p>
              </Link>
              <p className="t-body  f6  mid-grey  rel">
                {item.description.substring(0, 150)}
                ...
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default ArticlesGrid;
