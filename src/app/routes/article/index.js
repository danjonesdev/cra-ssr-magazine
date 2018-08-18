import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import MainImage from '../../components/article/main-image'
import AnimatedHeading from '../../elements/animated-heading';
import ArticleSections from '../../components/article'

import {getCurrentProfile, removeCurrentProfile} from '../../../modules/article';

const frontload = async props => await props.getCurrentProfile(props.match.params.id);

class Article extends Component {
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
    const item = this.props.currentProfile;

    if (item._id) {
      return (
        <Page id="article" title={item.title} description={item.description} image={item.mainImage}>
          <MainImage mainImage={item.mainImage} alt={item.title} padding="pb3" />

          <div className="container-small  mla  mra  pa3  pa5-sm">
            <div className="flex  justify-center">
              <div className="col-22  col-20-sm  col-18-md  col-16-lg">
                <AnimatedHeading type="h1" title={item.title} padding="pb3" styles="t-title  ttu  bold  f4" />
                <ArticleSections body={item.body} />
              </div>
            </div>
          </div>
        </Page>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({currentProfile: state.article.currentProfile});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentProfile,
  removeCurrentProfile
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(Article));
