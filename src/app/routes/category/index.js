import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
import ArticlesGrid from '../../components/articles-grid';

import {getCurrentProfiles, removeCurrentProfiles} from '../../../modules/category';

const frontload = async props => await props.getCurrentProfiles(props.match.params.id);

class Article extends Component {
  componentWillUnmount() {
    this.props.removeCurrentProfiles();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentProfiles(nextProps.match.params.id);
    }
    return true;
  }

  render() {
    const category = this.props.currentProfiles;

    if (category._id) {
      return (
        <Page id="category" title={category.title} description={category.description} image="{item.mainImage}">
          <AnimatedHeading type="h1" title={category.title} padding="pt4  mt2" styles="t-title  ttu  bold  f5" />
          <ArticlesGrid items={category.posts} padding="pt4  pb2" />
        </Page>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({currentProfiles: state.category.currentProfiles});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentProfiles,
  removeCurrentProfiles
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(Article));
