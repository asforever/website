import React, {createRef, useEffect, useState} from "react";
import clsx from "clsx";
import {createStyles} from "../util";
import PropTypes from "prop-types";
import presetMsgEvent from "../state/presetMsgEvent";

const width = 5;
let useStyles = createStyles((theme) => ({
    container: {
        display: `flex`,
        flexDirection: `column`,
        position: `fixed`,
        top: `0`
    },
    list: {
        width: `${width}em`,
        minHeight: `1.5em`,
        backgroundColor: `#00c`,
        color: `#eee`,
        textAlign: `center`,
        paddingTop: `0.5em`,
        transition: `1s margin-left`,
        marginLeft: `${-width}em`
    },
    visible: {
        marginLeft: `0em`,
    },
    hidden: {
        marginLeft: `${-width}em`
    },
    down: {
        transform: `1s 1em`
    }
}));


function MsgProvider(props) {
    const classes = useStyles();
    let [lists, setLists] = useState([]);

    useEffect(() => {
        presetMsgEvent.subscribe("change", (evt) => {
            lists.push(evt.body);
            if (lists.length > 3) lists.shift();
            setLists(lists.concat());
        });
    }, []);

    let length = lists.length;

    return (<div  {...props} className={classes.container}>
        {lists.map((msg, key) => {
            let className = classes.list;
            const ref = createRef();
            setTimeout(()=>{
                if (key === 0) ref.current.className = clsx([className, classes.visible]);
                else if (key === length - 1) ref.current.className = clsx([className, classes.hidden]);
                else ref.current.className = clsx([className, classes.visible, classes.down]);
            });

            return <p ref={ref} className={className}
                      key={key}>{msg}
            </p>
        })
        }
    </div>)
}

MsgProvider.propTypes = {
    maxNum: PropTypes.number,
};

export default MsgProvider;
