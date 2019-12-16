import React, {useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import FormDialog from "../lib/yong-ui/components/FormDialog";
import {SaveArticleRequest} from "../store/action";
import MarkdownEditor from "../lib/yong-ui/components/MarkdownEditor";


function EditorPage(props) {
    const {dispatch, location} = props;
    const article = location.article || {};

    const [openSave, setOpenSave] = useState(false);
    const [text, setText] = useState(article.content);


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
        <MarkdownEditor defaultValue={text} onSave={popupDialog}/>
        <FormDialog isOpen={openSave}
                    onCancel={handleCancel}
                    onSubmit={handleSave}
                    lists={["目录", "分类", "摘要"]}
                    data={[article.title, article.category, article.summary]}
                    closeText="关闭"
                    submitText="保存"/>
    </>)
}

export default connect()(withRouter(EditorPage));
