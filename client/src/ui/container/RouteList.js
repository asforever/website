import PropTypes from "prop-types";
import React from "react";
import {Route, Redirect} from "react-router-dom"

function RouteList(props) {
    let {routeList} = props;
    return (routeList.map((route, key) => {

        return <Route exact={key === 0}
                      key={route.name}
                      path={route.path}>
            {Boolean(route.redirect) ?
                <Redirect to={{pathname: route.redirect}}>
                </Redirect> :
                <route.component {...props}>
                </route.component>}
        </Route>
    }))
}

RouteList.propTypes = {
    routeList: PropTypes.array.isRequired,
};

export default RouteList;
