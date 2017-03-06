import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


export default React.createClass({
  displayName: 'Navigation',
  propTypes: {
    menuVisible: React.PropTypes.bool
  },
  mixins: [PureRenderMixin],
  render: function() {
    return  <Drawer open={this.props.menuVisible}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>;
  }
});