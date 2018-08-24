import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';

import ArticlesGrid from '../../components/articles-grid';

import {
  getCurrentSubject,
  removeCurrentSubjects,
} from '../../../modules/category';

const frontload = async props =>
  await props.getCurrentSubject(props.match.params.id);

class ArticlesCategory extends Component {
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
    this.props.getWorkerData(category)

    if (category._id) {
      return (
        <div>
          <ArticlesGrid items={category.posts} type="grid" padding="pt4  pb2" />
        </div>
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
  })(ArticlesCategory)
);
