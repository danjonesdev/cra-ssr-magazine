import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';

import Page from '../../components/page';
import MainImage from '../../components/article/main-image'
import AnimatedHeading from '../../elements/animated-heading';
import Para from '../../components/article/para';
import Bullet from '../../components/article/bullet';
import Number from '../../components/article/number';

import {getCurrentProfile, removeCurrentProfile} from '../../../modules/article';

const frontload = async props => await props.getCurrentProfile(props.match.params.id);

class Profile extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      bulletListOpen: false,
      numberListOpen: false
    };
  }

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
      return (
        <ul key={i}>
          <Bullet children={item.children} />
        </ul>
      );
    }

    if (item._type === 'block' && item.listItem === 'number') {
      if (!this.state.numberListOpen) {
        // this.setState({ numberListOpen: true });
        return (
          <ul key={i}>
          <Number children={item.children} />
          </ul>
        );
      } else {
        // this.setState({ numberListOpen: false });
        return (
          <ul key={i}>
          <Number children={item.children} />
          </ul>
        );
      }
    }
  }

  render() {
    const item = this.props.currentProfile;
    console.log(item);

    if (item._id) {
      return (
        <Page id="article" title={item.title} description="d" image="d">
          <MainImage mainImage={item.mainImage} alt={item.title} padding="pb3" />

          <div className="container-small  mla  mra  pa3  pa5-sm">
            <AnimatedHeading type="h1" title={item.title} padding="pb3" fullWidth={false} styles="t-title  ttu  bold  f4  tal" />

            {item.body.map((item, i) => (
              this.renderBody(item, i)
            ))}
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
})(Profile));
