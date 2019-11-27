import React, {useMemo, useState} from "react";
import FormComponent from "../../component/list/FormComponent";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {FetchUserRequest, PopupMsg} from "../../store/action";

const formList = [{text: "用户名", type: "hidden", name: "username"}, {text: "密码", type: "password"}]

function LoginPage(props) {
    const {user, dispatch} = props;

    const onClose = () => {
        props.history.push('home');
    };
    const onApply = (params) => {
        const username = params[formList[0].text];
        const password = params[formList[1].text];
        if (!username || !password) {
            dispatch(PopupMsg("請輸入用戶名和密碼"));
            return;
        }
        dispatch(FetchUserRequest({user: {username, password}}));
    };

    if (user.username) {
        onClose();
    }


    return (
        <FormComponent
            onClose={onClose}
            onApply={onApply}
            listData={formList}
            bottomData={["登陆", "主页"]}/>)
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
};

export default withRouter(connect(mapStateToProps)(LoginPage));

