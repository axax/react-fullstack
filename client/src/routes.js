import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import {LayoutContainer} from './components/Layout';
import {VotingContainer} from './components/Voting';
import {ResultsContainer} from './components/Results';

export default  <Router history={hashHistory}>
                  <Route component={App}>
                    <Route component={LayoutContainer}>
                      <Route path="/results" component={ResultsContainer} />
                      <Route path="/" component={VotingContainer} />
                    </Route>
                  </Route>
                </Router>;