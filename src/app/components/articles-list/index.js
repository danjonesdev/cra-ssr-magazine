import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimatedImage from '../../elements/animated-image'

class ArticlesList extends Component {
  render() {
    const { items } = this.props;
    const { padding } = this.props;

    return (
      <section className={`flex  flex-wrap  ${padding}`}>
        {items.map((item, i) => (
          <div className="col-24  col-12-sm  col-24-lg  pb2  ph2  ph0-ld">
            <article key={i} className="flex  flex-wrap  shadow2">
              <div className="col-6">
                <figure>
                  <Link className="link  db  pa2" to={`/article/${item.slug.current}`}>
                    <AnimatedImage lazy={true} src={item.mainImage} alt={item.title} styles="trans-all-1  h1  w-100" />
                  </Link>
                </figure>
              </div>

              <div className="col-18  ph2  pt2">
                <Link className="link" to={`/article/${item.slug.current}`}>
                  <p className="t-title  f6  f5-md  black  pt1  pb2">{item.title}</p>
                </Link>
              </div>
            </article>
          </div>
          ))}
      </section>
    );
  }
}

export default ArticlesList;
