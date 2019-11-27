import React from "react"
import {connect} from "react-redux"
import RouteListComponent from "./component/list/route/RouteListComponent";
import router from "./router/router"
import {FetchUserRequest, PopupSaveArticle} from "./store/action";
import {UserMgr} from "../app/storage/UserMgr";

const MainComponent = (props) => {
    const {dispatch} = props;
    dispatch(FetchUserRequest());
    return (<RouteListComponent routeRoot={router}></RouteListComponent>)
};

export default connect()(MainComponent);
