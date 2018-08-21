import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
import AuthorComponent from '../../components/author'
import ArticlesGrid from '../../components/articles-grid';

import {getCurrentSubject, removeCurrentSubject} from '../../../modules/author';

const frontload = async props => await props.getCurrentSubject(props.match.params.id);

class Author extends Component {
  componentWillUnmount() {
    this.props.removeCurrentSubject();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentSubject(nextProps.match.params.id);
    }
    return true;
  }

  render() {
    const profile = this.props.currentProfile;

    if (profile._id) {
      return (
        <Page id="author" title={profile.title} description={profile.title} image={profile.mainImage}>
          <AnimatedHeading type="h1" title={profile.name} padding="pt4  mt2" styles="t-title  ttu  bold  f5" />
          <AuthorComponent profile={profile} padding="pt4  mt2" />
          <ArticlesGrid items={profile.articles} type="grid" padding="pt4  pb2" />
        </Page>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({currentProfile: state.author.currentProfile});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentSubject,
  removeCurrentSubject
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(Author));
