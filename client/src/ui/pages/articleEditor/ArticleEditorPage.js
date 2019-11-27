import React from 'react'
import {connect} from "react-redux";
import clsx from 'clsx';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/save';
import HelpIcon from '@material-ui/icons/help';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import ReactMarkdown from "react-markdown";
import {PopupMsg, PopupSaveArticle} from "../../store/action/PopupAction";
import Drawer from "@material-ui/core/Drawer/Drawer";
import {Config} from "../../../config/Config";

const helpText = Config.MARK_DOWN_DEFAULT_TEXT;

const useStyles = makeStyles(theme => ({
    container: {
        display: `flex`,
        backgroundImage: theme.self.bgImg0,
    },
    helper: {
        padding: `1em`,
        width: `20em`,
        margin: `1em -1em 1em 0`,
        position: `relative`,
    },
    helperShift: {
        width: `0`,
        display: `none`
    },
    helperText: {
        height: `calc(100vh - 6rem)`,
        overflowY: `scroll`,
        whiteSpace: `pre-wrap`
    },
    paper: {
        margin: `1em`,
        height: `calc(100vh - 42px)`,
        width: `calc(100vw - 42px)`,
        border: `1px solid ${theme.palette.divider}`,
    },
    paperContainer: {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `stretch`,
        height: `100%`,
    },
    toggleContainer: {
        display: `flex`,
        flexWrap: 'wrap',
    },
    header: {
        display: `flex`,
        flexWrap: 'wrap',
        justifyContent: `space-between`,
    },
    content: {
        display: `flex`,
        justifyContent: `flex-start`,
        height: `100%`
    },
    divider: {
        alignSelf: 'stretch',
        height: 'auto',
        margin: theme.spacing(1, 0.5),
    },
    textarea: {
        ...theme.self.scrollBar,
        margin: `1rem`,
        padding: `1rem`,
        resize: `none`,
        border: `0`,
        height: `auto`,
        width: `20rem`,
    }

}));

const StyledToggleButtonGroup = withStyles(theme => ({
    grouped: {
        margin: theme.spacing(0.5),
        border: 'none',
        padding: theme.spacing(0, 1),
        '&:not(:first-child)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-child': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}))(ToggleButtonGroup);

let defaultContent = "";

function ArticleEditorPage(props) {
    const {article} = props.location;
    if (article) defaultContent = article.content;

    const [helpBar, toggleHelpBar] = React.useState(true);
    const [formats, setFormats] = React.useState(() => []);
    const [text, setText] = React.useState(defaultContent);
    const [selectStart, setSelectStart] = React.useState(0);
    const [selectStop, setSelectStop] = React.useState(0);
    const username = props.user.username;
    const ref = React.createRef();

    const onToggleHelpBar = () => {
        toggleHelpBar(!helpBar);
    };

    const handleFormat = (event, newFormats) => {

        if (Number(selectStop) - Number(selectStart) < 1) return;

        const text = ref.current.getElementsByTagName("textarea")[0].value;

        let startText = text.slice(0, selectStart);
        let selectedText = text.slice(selectStart, selectStop);
        let stopText = text.slice(selectStop, text.length);
        switch (newFormats[0]) {
            case "bold":
                selectedText = "**" + selectedText + "**";
                break;
            case "italic":
                selectedText = "*" + selectedText + "*";
                break;
        }
        setText(startText + selectedText + stopText);
        setFormats();
    };


    const handleChangeText = (event) => {
        setText(event.target.value);
    };

    const handleSelect = (event) => {
        const target = event.target;
        setSelectStart(target.selectionStart || 0);
        setSelectStop(target.selectionEnd || 0);
    };

    const handleSave = (e, text) => {
        props.popupSaveArticle(e, text, username)
    };
    const classes = useStyles();

    const row = window.innerHeight / 24;
    return (
        <div className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <div className={classes.paperContainer}>
                    <div className={classes.header}>
                        <div className={classes.toggleContainer}>
                            {/*                            <StyledToggleButtonGroup
                                size="small"
                                value={alignment}
                                exclusive
                                onChange={handleAlignment}
                                aria-label="text alignment"
                            >
                                <ToggleButton value="left" aria-label="left aligned">
                                    <FormatAlignLeftIcon/>
                                </ToggleButton>
                                <ToggleButton value="center" aria-label="centered">
                                    <FormatAlignCenterIcon/>
                                </ToggleButton>
                                <ToggleButton value="right" aria-label="right aligned">
                                    <FormatAlignRightIcon/>
                                </ToggleButton>
                            </StyledToggleButtonGroup>*/}
                            {/*                            <Divider orientation="vertical" className={classes.divider}/>*/}
                            <StyledToggleButtonGroup
                                size="small"
                                value={formats}
                                onChange={handleFormat}
                                arial-label="text formatting"
                            >
                                <ToggleButton value="bold" aria-label="bold">
                                    <FormatBoldIcon/>
                                </ToggleButton>
                                <ToggleButton value="italic" aria-label="italic">
                                    <FormatItalicIcon/>
                                </ToggleButton>
                            </StyledToggleButtonGroup>
                        </div>
                        <div>
                            <IconButton onClick={onToggleHelpBar}>
                                <HelpIcon/>
                            </IconButton>
                            <IconButton onClick={(e) => handleSave(e, text)}>
                                <SaveIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <Divider/>
                    <div className={classes.content}>
                        <TextField
                            ref={ref}
                            className={classes.textarea}
                            multiline
                            value={text}
                            onChange={handleChangeText}
                            onSelect={handleSelect}
                            onBlur={handleSelect}
                            type="text"
                        ></TextField>
                        <Divider orientation="vertical" className={classes.divider}/>
                        <div>
                            <ReactMarkdown source={text}
                            ></ReactMarkdown>
                        </div>
                    </div>
                </div>
            </Paper>
            {helpBar ? <Paper
                className={clsx(classes.helper, !helpBar && classes.helperShift)}
            >
                <div className={classes.helperText}>{helpText}</div>
            </Paper> : null}
        </div>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        popupSaveArticle: (e, text, username) => {
            e.preventDefault();
            if (!username) dispatch(PopupMsg("您没有权限"));
            else dispatch(PopupSaveArticle({content: text}));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditorPage);

