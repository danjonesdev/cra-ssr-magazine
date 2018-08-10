import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';

import {getCurrentProfiles, removeCurrentProfiles} from '../../../modules/articles';

const frontload = async props => await props.getCurrentProfiles();

class Homepage extends Component {
  componentWillUnmount() {
    this.props.removeCurrentProfiles();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.path !== this.props.match.path) {
      this.props.getCurrentProfiles(nextProps);
    }
    return true;
  }

  renderList = (items) => {
    let list = [];

    for (let i = 0; i < items.length; i++) {
      list.push(
        <React.Fragment key={i}>
          <p>{items[i].title}</p>
        </React.Fragment>
      );
    }
    return list;
  }


  render() {
    const items = this.props.currentProfiles;

    if (items.length) {
      return (
        <Page id="article" title="scu" description="xx" image="d">
          {this.renderList(items)}
        </Page>
      );
    }
    return false;
  }
}

const mapStateToProps = state => ({currentProfiles: state.articles.currentProfiles});

const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentProfiles,
  removeCurrentProfiles
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false
})(Homepage));
