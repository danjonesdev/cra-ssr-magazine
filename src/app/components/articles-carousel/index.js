import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimatedImage from '../../elements/animated-image';

class ArticlesCarousel extends Component {
  render() {
    const { items } = this.props;
    const { padding } = this.props;

    return (
      <section className={`container-medium  mla  mra  ph0-sm  ${padding}`}>
        {items.map((item, i) => (
          <article key={i} className="w-100  w-40-sm  mlra  mra  pa3">
            <figure>
              <Link
                className="link  db  shadow2"
                to={`/article/${item.slug.current}`}
              >
                <AnimatedImage
                  lazy={false}
                  src={item.mainImage}
                  alt={item.title}
                  styles="trans-all-1  h7  h9-sm  w-100"
                />
              </Link>
            </figure>

            <div className="pt2  mt2  tac">
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
              <p className="t-title  bold  f6  f5-md  black  tac  pt1  pb2">
                {item.title}
              </p>
            </Link>
            <p className="t-body  f6  mid-grey  tac  rel">
              {item.description.substring(0, 150)}
              ...
            </p>
          </article>
        ))}
      </section>
    );
  }
}

export default ArticlesCarousel;
