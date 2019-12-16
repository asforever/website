import React, {createRef} from "react";
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
            backgroundColor: `#e9c1ff`,
            padding: `0.5em`,
            borderRadius: `5px`,
            display: `flex`,
            flexDirection: `column`,
            boxShadow: `2px 5px 3px #00000033`
        },
        lists: {
            display: `flex`,
            flexDirection: `column`,
        },
        list: {
            border: `1px solid #aaa`,
            padding: `3px`
        },
        bottom: {
            margin: `0 auto`,
            '& button': {
                margin: `0.5em 0.5em 0 0.5em`
            }
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
        , closeText
        , isOpen = false,
    } = props;
    const classes = useStyles();
    const ref = createRef();

    const _onSubmit = () => {
        const children = Array.from(ref.current.children);
        let data = children.map(child => child.value);
        onSubmit && onSubmit(data);
    };

    const _onCancel = () => {
        onCancel && onCancel();
    };


    return (isOpen ? <Container className={classes.bg}>
        <div className={classes.container}>
            <form ref={ref} className={classes.lists}>
                {lists.map((list, key) => {
                    const placeholder = list.value || list;
                    const type = list.type || "text";

                    return <input key={placeholder}
                                  type={type}
                                  autoComplete="true"
                                  className={classes.list}
                                  placeholder={placeholder}
                                  defaultValue={data[key]}/>
                })}
            </form>
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
    lists: PropTypes.array.isRequired,
    submitText: PropTypes.string.isRequired,
    closeText: PropTypes.string.isRequired,
};

