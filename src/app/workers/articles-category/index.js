import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import ArticlesCarousel from '../../components/articles-carousel';

import {getCurrentProfiles, removeCurrentProfiles} from '../../../modules/articles-category';

class ArticlesCategory extends Component {
  componentDidMount() {
    this.props.getCurrentProfiles(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.removeCurrentProfiles();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentProfiles(this.props.match.params.id);
    }
    return true;
  }

  render() {
    const items = this.props.currentProfiles;
    const { padding } = this.props;

    if (items.length) return <ArticlesCarousel items={items} padding={padding} />;
    return false;
  }
}

const mapStateToProps = state => ({currentProfiles: state.articlesCategory.currentProfiles});
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentProfiles, removeCurrentProfiles}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesCategory);
