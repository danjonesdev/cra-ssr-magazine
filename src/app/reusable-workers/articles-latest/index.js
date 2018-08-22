import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArticlesGrid from '../../components/articles-grid';
import ArticlesList from '../../components/articles-list';
import ArticleCarousel from '../../components/articles-carousel';

import {
  getCurrentSubject,
  removeCurrentSubjects,
} from '../../../modules/articles-latest';

class ArticlesLatest extends Component {
  componentDidMount() {
    this.props.getCurrentSubject({
      limitFrom: this.props.limitFrom,
      limitTo: this.props.limitTo,
    });
  }

  componentWillUnmount() {
    this.props.removeCurrentSubjects();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.props.getCurrentSubject({
        limitFrom: this.props.limitFrom,
        limitTo: this.props.limitTo,
      });
    }
    return true;
  }

  render() {
    const items = this.props.currentProfiles;
    const { padding } = this.props;

    if (items.length && type === 'grid')
      return <ArticlesGrid items={items} padding={padding} />;
    if (items.length && type === 'list')
      return <ArticlesList items={items} padding={padding} />;
    if (items.length && type === 'carousel')
      return <ArticleCarousel items={items} padding={padding} />;
    return false;
  }
}

const mapStateToProps = state => ({
  currentProfiles: state.articlesLatest.currentProfiles,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentSubject, removeCurrentSubjects }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesLatest);
