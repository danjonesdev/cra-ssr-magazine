import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import AuthorsGrid from '../../components/authors-grid';

import {getCurrentProfiles, removeCurrentProfiles} from '../../../modules/authors';

class Articlesgeneral extends Component {
  componentDidMount(nextProps) {
    this.props.getCurrentProfiles(nextProps);
  }

  componentWillUnmount() {
    this.props.removeCurrentProfiles();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.props.getCurrentProfiles(nextProps);
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
const mapDispatchToProps = dispatch => bindActionCreators({getCurrentProfiles, removeCurrentProfiles}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Articlesgeneral);
