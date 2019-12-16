import React, {useEffect} from "react";
import FormDialog from "../lib/yong-ui/components/FormDialog";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {FetchUserRequest} from "../store/action/UserAction";

function SignInPage(props) {
    const {fetchUser, user, history} = props;

    useEffect(() => {
        if (user) history.push("/home");
    });


    const handleCancel = (evt) => {
        history.push("/signup");
    };
    const handleSubmit = (data) => {
        fetchUser({user: {username: data[0], password: data[1]}});
    };

    return (
        <FormDialog isOpen={true}
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                    lists={["账号", {value: "密码", type: "password"}]}
                    closeText="注册"
                    submitText="登录"/>)
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
