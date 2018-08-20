import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AuthorsGrid from '../../components/authors-grid';

import {getCurrentSubject, removeCurrentSubjects} from '../../../modules/authors';

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

    if (items.length) return <AuthorsGrid items={items} padding={padding} />;
    return false;
  }
}

const mapStateToProps = state => ({currentProfiles: state.authors.currentProfiles});
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentSubject, removeCurrentSubjects}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articlesgeneral);
