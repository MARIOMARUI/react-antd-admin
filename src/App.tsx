/**
 * @Date 2020-06-19 18:38:40
 * @Remark
 */

// react
import React from "react";
// lib
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// components & widget
import Main from "view/Main";
import Login from "view/Login";
import NotFound from "view/NotFound";
// config
import { ROUTE_PREFIX } from "project/config";
// script & methods & public
// state
import { userState } from "state/global";
// interface && type
// 其它

function App() {
  const MainPath = `/${ROUTE_PREFIX}`;
  const rootRender = () => {
    const isLogin = userState.isLogin();
    return isLogin ? <Redirect to={MainPath} /> : <Redirect to="/login" />;
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={rootRender} />
        <Route path="/login" component={Login} />
        <Route path={MainPath} component={Main} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
