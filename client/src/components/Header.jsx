import React from 'react';
import AppBar from 'material-ui/AppBar';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Header',
  mixins: [PureRenderMixin],
  render: function() {
    return  <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"/>;
  }

});