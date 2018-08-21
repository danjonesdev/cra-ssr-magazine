import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import MainImage from '../../components/article/main-image'
import AnimatedHeading from '../../elements/animated-heading';
import ArticleSections from '../../components/article'
import ArticlesGeneral from '../../reusable-workers/articles-general';

import {getCurrentSubject, removeCurrentSubject} from '../../../modules/article';

const frontload = async props => await props.getCurrentSubject(props.match.params.id);

class Article extends Component {
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
    const item = this.props.currentProfile;

    if (item._id) {
      return (
        <Page id="article" title={item.title} description={item.description} image={item.mainImage}>
          <MainImage mainImage={item.mainImage} alt={item.title} padding="pb3" />

          <div className="container-medium  mla  mra  pa3  pa5-sm">
            <div className="flex  flex-wrap  justify-center">
              <div className="col-18  col-20-sm  col-18-md  col-15-lg  pr5-md">
                <AnimatedHeading type="h1" title={item.title} padding="pt2  pb2" styles="t-title  ttu  bold  f4" article={true} />
                <ArticleSections body={item.body} />
              </div>
              <div className="col-24  col-7-lg">
                <p className="t-title  f5  black  pl2  pt2  pb2">New</p>
                <ArticlesGeneral {...this.props} limitFrom={0} limitTo={3} type="list" padding="pt2  pb3" />
                  <p className="t-title  f5  black  pl2  pt2  pb2">Latest Insights</p>
                <ArticlesGeneral {...this.props} limitFrom={0} limitTo={3} type="list" padding="pt2  pb3" />
                  <p className="t-title  f5  black  pl2  pt2  pb2">More from Dan</p>
                <ArticlesGeneral {...this.props} limitFrom={0} limitTo={3} type="list" padding="pt2  pb3" />
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
  getCurrentSubject,
  removeCurrentSubject
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(Article));
