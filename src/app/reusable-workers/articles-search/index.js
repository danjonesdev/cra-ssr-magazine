import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ArticlesGrid from '../../components/articles-grid';
import ArticlesList from '../../components/articles-list';
import ArticleCarousel from '../../components/articles-carousel';

import {
  getCurrentSubject,
  removeCurrentSubjects,
} from '../../../modules/articles-search';

class ArticlesSearch extends Component {
  componentDidMount() {
    this.props.getCurrentSubject({
      limitFrom: this.props.limitFrom,
      limitTo: this.props.limitTo,
      id: this.props.match.params.id,
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
        id: this.props.match.params.id,
      });
    }
    return true;
  }

  render() {
    const items = this.props.currentProfiles;
    const { padding } = this.props;
    const { type } = this.props;

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
  currentProfiles: state.articlesSearch.currentProfiles,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ getCurrentSubject, removeCurrentSubjects }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesSearch);
