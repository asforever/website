import PropTypes from "prop-types";
import React, {useState} from "react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import {createStyles} from "../util";
import {SaveIcon} from "../icons/SaveIcon";
import IconButton from "./IconButton";

let useStyles = createStyles((theme) => ({
    container: {
        position: `fixed`,
        width: `calc(100vw - 2em)`,
        height: `100vh`,
        padding: `1em`,
        backgroundColor: `#20242a`,
    },
    context: {
        width: `calc(100vw - 4em)`,
        height: `calc(100vh - 3em)`,
        padding: `0.25em 1em 0.75em 1em`,
        backgroundColor: `#f6f6f6`,
    },
    header: {
        display: `flex`,
        width: `calc(100vw - 6em)`,
        height: `1.5em`,
        margin: `0 auto`
    },
    body: {
        width: `calc(100vw - 4em)`,
        height: `calc(100vh - 5em)`,
        display: `flex`,
        wordBreak: `break-all`,
        boxShadow: `0px 14px 20px 0px #00000030`,
    },
    left: {
        width: `calc(50% - 4px)`,
        padding: `1em`,
        resize: `none`,
        border: 0,
        marginRight: `4px`,
        '& textarea': {
            margin: `0`,
        }
    },
    right: {
        whiteSpace: `pre-wrap`,
        width: `50%`,
        height: `100%`,
        backgroundColor: `#ffffff`,
    },
}));

function MarkdownEditor(props) {
    const classes = useStyles();
    const {onSave,defaultValue="**h1**"} = props;
    const [text, setText] = useState(defaultValue);
    const handleChange = (evt) => {
        setText(evt.target.value);
    };
    const handleSave = (text) => (evt) => onSave(text);

    return (<div className={classes.container}>
        <div className={classes.context}>
            <div className={classes.header}>
                <IconButton onClick={handleSave(text)} icon={(<SaveIcon/>)}/>
            </div>
            <div className={classes.body}>
                <textarea defaultValue={text} onChange={handleChange} className={classes.left}/>
                <ReactMarkdown className={classes.right} source={text}/>
            </div>
        </div>
    </div>)
}

MarkdownEditor.propTypes = {
    onSave: PropTypes.func.isRequired,
}

export default MarkdownEditor;
