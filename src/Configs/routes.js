import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from '../App';
import Users from '../Components/Users';
import Posts from '../Components/Posts';
import Comments from '../Components/Comments';

const Routing = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
      <Route path="/posts/:userId" component={Posts} />
      <Route path="/comments/:postId" component={Comments} />
    </Route>
  </Router>
);

export default Routing;
