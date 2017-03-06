import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

import Header from './Header'
import Navigation from './Navigation'

export const Layout = React.createClass({
  displayName: 'Layout',
  propTypes: {
    children: React.PropTypes.object.isRequired
  },
  mixins: [PureRenderMixin],
  render: function () {
    return <div>
      <Header {...this.props}/>
      <Navigation {...this.props}/>
      {this.props.children}
    </div>;
  }
});


function mapStateToProps(state) {
  return {
    menuVisible: state.get('menuVisible')
  };
}

export const LayoutContainer = connect(
  mapStateToProps,
  actionCreators
)(Layout);