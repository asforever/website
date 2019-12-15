import React, {useState} from "react";
import {createStyles} from "../lib/yong-ui/util";
import ReactMarkdown from "react-markdown";
import {connect} from "react-redux";
import LinkButton from "../lib/yong-ui/components/LinkButton";
import FormDialog from "../lib/yong-ui/components/FormDialog";
import {SaveIcon} from "../lib/yong-ui/icons/SaveIcon";
import IconButton from "../lib/yong-ui/components/IconButton";
import {SaveArticleRequest} from "../store/action";
import MarkdownEditor from "../lib/yong-ui/components/MarkdownEditor";


function EditorPage(props) {
    const dispatch = props.dispatch;
    const [openSave, setOpenSave] = useState(false);
    const [text, setText] = useState("false");


    const handleCancel = (evt) => {
        setOpenSave(false);
    };
    const popupDialog = (text) => {
        setText(text);
        setOpenSave(true);
    };
    const handleSave = (data) => {
        const params = {
            title: data[0],
            category: data[1],
            summary: data[2],
            content: text,
        };
        dispatch(SaveArticleRequest(params));
        handleCancel();
    };


    return (<>
        <MarkdownEditor onSave={popupDialog}/>
        <FormDialog isOpen={openSave}
                    onCancel={handleCancel}
                    onSubmit={handleSave}
                    lists={["目录", "分类", "摘要"]}
                    closeText="关闭"
                    submitText="保存"/>
    </>)
}

export default connect()(EditorPage);
