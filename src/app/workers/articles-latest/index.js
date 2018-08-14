import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ArticleList from '../../components/article-list';

import {getCurrentProfiles, removeCurrentProfiles} from '../../../modules/articles';

class ArticlesLatest extends Component {
  componentDidMount(nextProps) {
    this.props.getCurrentProfiles(nextProps);
  }

  componentWillUnmount() {
    this.props.removeCurrentProfiles();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.props.getCurrentProfiles(nextProps);
    }
    return true;
  }

  render() {
    const items = this.props.currentProfiles;
    if (items.length) return <ArticleList items={items} />;
    return false;
  }
}

const mapStateToProps = state => ({currentProfiles: state.articles.currentProfiles});
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentProfiles, removeCurrentProfiles}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesLatest);
