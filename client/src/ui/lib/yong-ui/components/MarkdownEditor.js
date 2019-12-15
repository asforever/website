import PropTypes from "prop-types";
import React, {useState} from "react";
import clsx from "clsx";
import ReactMarkdown from "react-markdown";
import {createStyles} from "../util";
import {SaveIcon} from "../icons/SaveIcon";
import IconButton from "./IconButton";

let useStyles = createStyles((theme) => ({
    container: {
        padding: `3em`,
        height: `fit-content`,
        backgroundColor: `#e0e3ff`
    },
    context: {
        width: `100%`,
        height: `100%`,
        boxShadow: `1px 16px 20px 0px #05050585`
    },
    header: {
        display: `flex`,
        width: `calc(100% - 0.25em)`,
        height: `1.5em`,
        padding: `0.25em 0 0 0.27em`,
        borderRadius: `3px 3px 0 0`,
        backgroundImage: `linear-gradient(#cccccc 2%, #9b9b9b 80%,#5c5c5c 90% 100%)`,
    },
    body: {
        width: `100%`,
        height: `calc(100vh - 7.5em)`,
        backgroundColor: `#f6f6f6`,
        display: `flex`,
        wordBreak: `break-all`
    },
    left: {
        width: `50%`,
        height: `calc(100vh - 11em)`,
        padding: `1em`,
        resize: `none`,
        border: 0,
        borderRight: `1px solid #6f6f6f`,
    },
    right: {
        whiteSpace: `pre-wrap`,
        width: `50%`,
        height: `100%`,
    },
}));

function MarkdownEditor(props) {
    const classes = useStyles();

    const [text, setText] = useState("**h1**");
    const {onSave} = props;

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
