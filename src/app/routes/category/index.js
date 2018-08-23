import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import Page from '../../components/page';
import AnimatedHeading from '../../elements/animated-heading';
import ArticlesGrid from '../../components/articles-grid';

import {
  getCurrentSubject,
  removeCurrentSubjects,
} from '../../../modules/category';

const frontload = async props =>
  await props.getCurrentSubject(props.match.params.id);

class Article extends Component {
  componentWillUnmount() {
    this.props.removeCurrentSubjects();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentSubject(nextProps.match.params.id);
    }
    return true;
  }

  render() {
    const category = this.props.currentProfiles;

    if (category._id) {
      return (
        <Page
          id={category.slug.current}
          title={category.title}
          description={category.description}
          image="{item.mainImage}"
        >
          <AnimatedHeading
            headingType="h1"
            title={category.title}
            styles="t-title  ttu  bold  f5"
            container={true}
            padding="pt4  mt2"
          />

          <ArticlesGrid items={category.posts} type="grid" padding="pt4  pb2" />
        </Page>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({
  currentProfiles: state.category.currentProfiles,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCurrentSubject,
      removeCurrentSubjects,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onMount: true,
    onUpdate: false,
  })(Article)
);
