import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import AuthorComponent from '../../components/author'
import ArticlesGrid from '../../components/articles-grid';

import {getCurrentProfile, removeCurrentProfile} from '../../../modules/author';

const frontload = async props => await props.getCurrentProfile(props.match.params.id);

class Author extends Component {
  componentWillUnmount() {
    this.props.removeCurrentProfile();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentProfile(nextProps.match.params.id);
    }
    return true;
  }

  render() {
    const profile = this.props.currentProfile;

    if (profile._id) {
      return (
        <Page id="author" title={profile.title} description={profile.title} image={profile.mainImage}>
          <AuthorComponent profile={profile} padding="pt4  mt2" />
          <ArticlesGrid items={profile.articles} padding="pt4  pb2" />
        </Page>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({currentProfile: state.author.currentProfile});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentProfile,
  removeCurrentProfile
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(Author));
