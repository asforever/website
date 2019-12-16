import React from "react";
import MarkdownEditor from "./EditorPage";
import FormDialog from "../lib/yong-ui/components/FormDialog";

function LoginPage(props) {

    const handleCancel = (evt) => {

    };
    const handleSubmit = (data) => {

    };

    return (
        <FormDialog isOpen={true}
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                    lists={["账号", {value: "密码", type: "password"}]}
                    closeText="注册"
                    submitText="登录"/>)
}

export default LoginPage;
