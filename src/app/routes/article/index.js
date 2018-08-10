import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import Para from '../../components/article/para';
import Bullet from '../../components/article/bullet';

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

  // renderItem = (item) => {
  //   return (
  //     <React.Fragment>
  //       <p>{item.title}</p>
  //       <img src={item.mainImg} alt={item.title} />
  //     </React.Fragment>
  //   );
  // }

  renderBody = (item, i) => {
    if (item._type === 'block' && !item.listItem) {
      return (
        <div key={i}>
          <Para children={item.children} />
        </div>
      );
    }

    if (item._type === 'block' && item.listItem === 'bullet') {
      console.log('bullet item');
      console.log(item);
      return (
        <ul key={i}>
          <Bullet children={item.children} />
        </ul>
      );
    }
    //
    // if (item[i]._type === 'block' && item[i].listItem === 'number') {
    //   console.log('number item');
    //   continue;
    // }
  }

  render() {
    const item = this.props.currentProfile;

    if (item._id) {
      return (
        <Page id="article" title={item.title} description="d" image="d">
          {item.body.map((item, i) => (
            this.renderBody(item, i)
          ))}
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
})(Profile));
