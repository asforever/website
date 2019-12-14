import React, {useState} from "react";
import {createStyles} from "../lib/yong-ui/util";
import ReactMarkdown from "react-markdown";
import {connect} from "react-redux";
import LinkButton from "../lib/yong-ui/components/LinkButton";
import FormDialog from "../lib/yong-ui/components/FormDialog";
import {SaveIcon} from "../lib/yong-ui/icons/SaveIcon";
import IconButton from "../lib/yong-ui/components/IconButton";
import {SaveArticleRequest} from "../store/action";

let useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,

        height: `100vh`,
        '& textarea': {
            height: `100%`,
            width: `30em`,
        }
    },
    markdown: {
        width: `100%`,
        backgroundColor: `#ddd`,

    },
    help: {
        height: `100%`,
        width: `20em`,
        backgroundColor: `#ccc`,
    },
    tool: {
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: `#ccc`,
    }
}));

function EditorPage(props) {
    const dispatch = props.dispatch;
    const classes = useStyles();
    const [text, setText] = useState("**h1**");
    const [openSave, setOpenSave] = useState(false);
    const handleChange = (evt) => {
        setText(evt.target.value);
    };

    const handleCancel = (evt) => {
        setOpenSave(false);
    };
    const popupDialog = (evt) => {
        setOpenSave(true);
    };
    const handleSave = (data) => {
        const params = {
            title: data[0],
            category: data[1],
            summary: data[2],
            content: text,
        }
        dispatch(SaveArticleRequest(params));
        handleCancel();
    };


    return (<>
        <div className={classes.container}>
            <div className={classes.tool}>
                <IconButton onClick={popupDialog} icon={(<SaveIcon/>)}/>
            </div>
            <textarea onChange={handleChange}/>
            <ReactMarkdown className={classes.markdown} source={text}/>
            <div className={classes.help}/>
        </div>
        <FormDialog isOpen={openSave}
                    onCancel={handleCancel}
                    onSubmit={handleSave}
                    lists={["目录", "分类", "摘要"]}
                    closeText="关闭"
                    submitText="保存"/>
    </>)
}

export default connect()(EditorPage);
