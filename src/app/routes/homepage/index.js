import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {frontloadConnect} from 'react-frontload';
import BlockContent from '@sanity/block-content-to-react';

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
          <BlockContent blocks={items[i].body} serializers={this.serializers} />,
        </React.Fragment>
      );
    }
    return list;
  }

  serializers = {
    types: {
      code: props => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      )
    }
  }

  render() {
    const items = this.props.currentProfiles;
    console.log(items);

    if (items.length) {
      return (
        <Page id="article" title="scu" description="xx" image="d" serializers={this.serializers}>
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
