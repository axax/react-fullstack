import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

// Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});


export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.object.isRequired
  },
  mixins: [PureRenderMixin],
  render: function () {
    return <MuiThemeProvider muiTheme={muiTheme}>
      {this.props.children}
    </MuiThemeProvider>;
  }
});