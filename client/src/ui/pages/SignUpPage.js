import React from "react";
import FormDialog from "../lib/yong-ui/components/FormDialog";
import {withRouter} from "react-router-dom";

function SignUpPage(props) {
    const {history} = props;

    const handleCancel = (evt) => {
        history.push("/signin");
    };
    const handleSubmit = (data) => {

    };

    return (
        <FormDialog isOpen={true}
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                    lists={["账号", {placeholder: "请输入密码", type: "password"}, {placeholder: "重复输入密码", type: "password"}]}
                    closeText="登录"
                    submitText="注册"/>)
}

export default withRouter(SignUpPage);
