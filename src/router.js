import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './pages/Index/Index';
import ChatPage from './pages/Chat/Index';
import SharePage from './pages/Share/Index';
import UserPage from './pages/User/Index';
import FriendsPage from './pages/Friends/Index';
import StatisticsPage from './pages/Statistics/Index';
import NavPage from './components/nav'
function RouterConfig({ history }) {
  return (
    <>
      <NavPage></NavPage>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/Chat" exact component={ChatPage} />
          <Route path="/Share" exact component={SharePage} />
          <Route path="/User" exact component={UserPage} />
          <Route path="/Friends" exact component={FriendsPage} />
          <Route path="/Statistics" exact component={StatisticsPage} />
        </Switch>
      </Router>
    </>
  );
}

export default RouterConfig;
