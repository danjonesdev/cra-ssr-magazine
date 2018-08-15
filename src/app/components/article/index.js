import React, { Component } from 'react';

import Para from '../../components/article/para';
import Bullet from '../../components/article/bullet';
import Number from '../../components/article/number';

class ArticleSections extends Component {
  renderSections = (section, i) => {
    if (section._type === 'block' && !section.listsection) {
      return (
        <div key={i}>
          <Para children={section.children} />
        </div>
      );
    }

    if (section._type === 'block' && section.listsection === 'bullet') {
      return (
        <ul key={i}>
          <Bullet children={section.children} />
        </ul>
      );
    }

    if (section._type === 'block' && section.listsection === 'number') {
      if (!this.state.numberListOpen) {
        // this.setState({ numberListOpen: true });
        return (
          <ul key={i}>
          <Number children={section.children} />
          </ul>
        );
      } else {
        // this.setState({ numberListOpen: false });
        return (
          <ul key={i}>
          <Number children={section.children} />
          </ul>
        );
      }
    }
  }

  render() {
    const { body } = this.props;

    return (
      <React.Fragment>
        {body.map((section, i) => (
          this.renderSections(section, i)
        ))}
      </React.Fragment>
    );
  }
}

export default ArticleSections;
