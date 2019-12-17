import React, {createRef, useState} from "react";
import PropTypes from "prop-types";
import {Container} from "./Container";
import {createStyles} from "../util";

const useStyles = createStyles((theme) => {
    return {
        bg: {
            position: `fixed`,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: `fit-content`,
            height: `fit-content`,
            margin: `auto`,


        },
        container: {
            backgroundColor: `#ffffff`,
            padding: `1em`,
            borderRadius: `2px`,
            display: `flex`,
            flexDirection: `column`,
            boxShadow: `2px 5px 3px #00000033`
        },
        lists: {
            display: `flex`,
            flexDirection: `column`,
        },
        list: {
            border: `0`,
            borderBottom: `1px solid #888`,
            padding: `0.5em`
        },
        bottom: {
            margin: `0 auto`,
            '& button': {
                margin: `1em 0.5em 0 0.5em`,
                padding: `0  1em 0 1em`,
                backgroundColor: `#fff`
            }
        },
        submitError: {
            color: `red`,
            fontSize: `0.5em`,
        }
    }
});

export default function FormDialog(props) {
    const {
        onSubmit
        , onCancel
        , lists
        , data = []
        , submitText
        , submitError
        , closeText
        , isOpen = false,
    } = props;
    const classes = useStyles();
    const ref = createRef();

    const _onSubmit = () => {
        const children = Array.from(ref.current.children);
        let data = children.map((child) => child.children[0].value);
        onSubmit && onSubmit(data);
    };

    const _onCancel = () => {
        onCancel && onCancel();
    };


    return (isOpen ? <Container className={classes.bg}>
        <div className={classes.container}>
            <form ref={ref} className={classes.lists}>
                {lists.map((list, key) => {
                    const placeholder = list.placeholder || list;
                    const errorMsg = list.errorMsg;
                    const msg = list.msg;
                    const type = list.type || "text";

                    return (<div key={placeholder} className={classes.lists}>
                        <input
                            type={type}
                            autoComplete="true"
                            className={classes.list}
                            placeholder={placeholder}
                            defaultValue={data[key]}/>
                        {errorMsg ? <span className={classes.submitError}>{errorMsg}</span> : <></>}
                        {msg ? <span>{msg}</span> : <></>}
                    </div>)
                })}
            </form>
            {submitError ? <span className={classes.submitError}>{submitError}</span> : <></>}
            <div className={classes.bottom}>
                <button onClick={_onSubmit}>{submitText}</button>
                <button onClick={_onCancel}>{closeText}</button>
            </div>
        </div>
    </Container> : <></>)
}

FormDialog.propsType = {
    isOpen: PropTypes.bool,
    onSummit: PropTypes.func,
    onCancel: PropTypes.func,
    lists: PropTypes.arrayOf(PropTypes.shape({
        placeholder: PropTypes.string.isRequired,
        type: PropTypes.string,
        msg: PropTypes.string,
        errorMsg: PropTypes.string,
    })).isRequired,
    submitText: PropTypes.string.isRequired,
    closeText: PropTypes.string.isRequired,
};

