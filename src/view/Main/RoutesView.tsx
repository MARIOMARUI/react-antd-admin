/**
 * @Date 2020-06-23 14:55:01
 * @Remark
 */

// react
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// lib
// components & widget
import LazyLoading from "./LazyLoading";
// config
import { ROOT_ADMIN_USER_ID, ROUTE_MODE } from "project/config";
// routes
import { getRouteComponentList } from "routes/logic";
// store
import { userState } from "state/global";
// 异常访问
// import NotPermission from "view/NotPermission";
import NotFound from "view/NotFound";
// model & interface
// import { IAppRoute } from "model/AppRoute";
// 其它

function RoutesView() {
  const list = getRouteComponentList();
  const account = userState.getAccount();
  const userMenuList = account.menuList;
  return (
    <Suspense fallback={<LazyLoading />}>
      <Switch>
        {list
          .filter((el) => el.component)
          .map((route) => {
            const have = userMenuList.find((el) => el.uri === route.path);
            const Content = route.component;
            const canFlag = account.userId === ROOT_ADMIN_USER_ID;
            // 有权限访问
            if (have || ROUTE_MODE === "static" || canFlag) {
              return (
                <Route key={route.code} path={route.path} exact>
                  <Content />
                </Route>
              );
            }
            // 无权限访问
            return (
              <Route key={route.code} path={route.path} exact>
                {/* <NotPermission /> */}
              </Route>
            );
          })}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default RoutesView;
