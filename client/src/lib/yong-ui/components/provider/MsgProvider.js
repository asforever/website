import React, {createRef, useEffect, useState} from "react";
import {createStyles} from "../../util";
import PropTypes from "prop-types";
import presetMsgEvent from "../../state/presetMsgEvent";
import {TaskMsg, Task} from "../../task";

const width = 5;
let useStyles = createStyles((theme) => ({
    container: {
        width: `30em`,
        top: `0`,
        position: `fixed`,
        display: `flex`,
        flexDirection: `column`,
    },
    list: {
        width: `${width}em`,
        minHeight: `1em`,
        backgroundColor: `#2d2a2d`,
        padding: `0.5em`,
        color: `#eee`,
        borderRadius: `4px`,
        textAlign: `center`,
        position: `absolute`,
        left: `0`,
        top: `0`,
    },

}));

const animate = async function (domArr, delta, type, startIndex = 0) {
    switch (type) {
        case 0:
            return new Promise((r) => {
                setTimeout(() => {
                    domArr.forEach(dom => {
                        dom.style.left = `10em`;
                    });
                });
                setTimeout(() => {
                    r();
                }, delta);
            });
        case 1:
            return new Promise((r) => {
                setTimeout(() => {
                    domArr.forEach((dom, key) => {
                        dom.style.top = `${(startIndex + key) * 3}em`;
                    });
                });
                setTimeout(() => {
                    r();
                }, delta);
            });
        case 2:
            return new Promise((r) => {
                setTimeout(() => {
                    domArr.forEach(dom => {
                        dom.style.left = `0em`;
                    });
                });
                setTimeout(() => {
                    domArr.forEach(dom => {
                        dom.parentElement.removeChild(dom);
                    });
                    r();
                }, delta);
            });
        default:
            break;
    }
};


function MsgProvider(props) {
    const classes = useStyles();

    const ref = createRef();
    useEffect(() => {
        let maxNum = 5;
        let delta = 1000;
        let parent = ref.current;
        const taskMsg = new TaskMsg();

        presetMsgEvent.subscribe("change", async (evt) => {
            let newMsg = evt.body;
            let newDom = document.createElement("p");
            newDom.className = classes.list;
            newDom.innerHTML = newMsg;
            newDom.style.transition = `${delta / 1000}s left, ${delta / 1000}s top`;
            parent.prepend(newDom);
            let children = parent.children;
            let mid = Array.from(children).splice(1, maxNum - 1);
            let last = Array.from(children).splice(maxNum - 1, children.length);


            const task0 = new Task(delta, async (_domArr, _delta) => {
                return new Promise((r) => {
                    setTimeout(() => {
                        _domArr.forEach((dom, key) => {
                            dom.style.top = `${(key + 1) * 3}em`;
                        });
                    });
                    setTimeout(() => {
                        r();
                    }, delta);
                });
            }, mid, delta);
            const task1 = new Task(delta, async (_dom, _delta) => {
                return new Promise((r) => {
                    setTimeout(() => {
                        _dom.style.left = `10em`;
                    });
                    setTimeout(() => {
                        r();
                    }, _delta);
                });
            }, newDom, delta);

            if(mid.length)taskMsg.addTask(task0);
            taskMsg.addTask(task1);


        });
    }, []);
    return (<div ref={ref} className={classes.container}/>)
}

MsgProvider.propTypes = {
    maxNum: PropTypes.number,
};

export default MsgProvider;
