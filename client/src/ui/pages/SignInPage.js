import React, {useEffect, useState} from "react";
import FormDialog from "../lib/yong-ui/components/FormDialog";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {FetchUserRequest} from "../store/action/UserAction";

function SignInPage(props) {
    const {fetchUser, user, history} = props;
    const [lists, setLists] = useState([
        {placeholder: "请输入账号", regex: /^[A-Za-z0-9]+$/, errorMsg: "", tempErrorMsg: "账号不符合要求"},
        {placeholder: "请输入密码", regex: /^[A-Za-z0-9]+$/, errorMsg: "", tempErrorMsg: "密码不符合要求", type: "password"}
    ]);

    useEffect(() => {
        if (user) history.push("/home");
    });


    const handleCancel = (evt) => {
        history.push("/signup");
    };
    const handleSubmit = (data) => {
        let isCorrect = true;
        data.forEach((v, key) => {
            const list = lists[key];
            const {regex} = list;
            if (regex && !regex.exec(v)) {
                list.errorMsg = list.tempErrorMsg;
                isCorrect = false;
            } else {
                list.errorMsg = "";
            }
        });
        console.log(lists)
        setLists(lists.concat());
        if (isCorrect) fetchUser({user: {username: data[0], password: data[1]}});
    };

    return (
        <FormDialog isOpen={true}
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                    lists={lists}
                    closeText="注册"
                    submitText="登录"
        />)
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducer.curUser
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchUser: (params) => {
            dispatch(FetchUserRequest(params));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignInPage));
