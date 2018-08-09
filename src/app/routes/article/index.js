import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';

import {getCurrentProfile, removeCurrentProfile} from '../../../modules/article';

const frontload = async props => await props.getCurrentProfile(props.match.params.id);

class Profile extends Component {
  componentWillUnmount() {
    this.props.removeCurrentProfile();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.props.getCurrentProfile(nextProps.match.params.id);
    }
    return true;
  }

  renderItem = (item) => {
    return (
      <React.Fragment>
        <p>{item.title}</p>
        <img src={item.mainImg} alt={item.title} />
      </React.Fragment>
    );
  }

  render() {
    const item = this.props.currentProfile;
    
    return (
      <Page id="article" title={item.title} description="d" image="d">
        {this.renderItem(item)}
      </Page>
    );
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
})(Profile));
