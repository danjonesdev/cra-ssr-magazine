import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ArticlesGrid from '../../components/articles-grid';
import ArticlesList from '../../components/articles-list';

import {getCurrentSubject, removeCurrentSubjects} from '../../../modules/articles-general';

class Articlesgeneral extends Component {
  componentDidMount(nextProps) {
    this.props.getCurrentSubject(nextProps);
  }

  componentWillUnmount() {
    this.props.removeCurrentSubjects();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.props.getCurrentSubject(nextProps);
    }
    return true;
  }

  render() {
    const items = this.props.currentProfiles;
    const { padding } = this.props;
    const { type } = this.props;

    if (items.length && type === 'grid') return <ArticlesGrid items={items} padding={padding} />;
    if (items.length && type === 'list') return <ArticlesList items={items} padding={padding} />;
    return false;
  }
}

const mapStateToProps = state => ({currentProfiles: state.articlesGeneral.currentProfiles});
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentSubject, removeCurrentSubjects}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articlesgeneral);
