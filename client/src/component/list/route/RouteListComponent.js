import React from "react";
import {Redirect, Route} from "react-router-dom";

function RouteListComponent({routeRoot}) {
    return routeRoot.children.map((routeList, key) => {
        return <Route exact
                      path={routeList.path}
                      key={key}
                      render={(props) => {
                          return Boolean(routeList.redirect) ?
                              <Redirect to={{pathname: routeList.redirect}}></Redirect> :
                              <routeList.component {...props}>
                                  {routeList.children
                                      ? <RouteListComponent routeList={routeList}></RouteListComponent>
                                      : null}
                              </routeList.component>
                      }}>
        </Route>;
    });
}

export default RouteListComponent;
