import React from "react";
import {Container} from "../lib/yong-ui/components/Container";
import {Paper} from "../lib/yong-ui/components/Paper";
import {Typography} from "../lib/yong-ui/components/Typography";
import {List} from "../lib/yong-ui/components/List";
import {PhotoFrame} from "../lib/yong-ui/components/PhotoFrame";
import {createStyles} from "../lib/yong-ui/util";
import {ListButton} from "../lib/yong-ui/components/ListButton";
import HeadBar from "../component/HeadBar";
import {Divider} from "../lib/yong-ui/components/Divider";
import {LinkButton} from "../lib/yong-ui/components/LinkButton";

let useStyles = createStyles((theme) => ({
    paper: {
        minHeight: `100vh`,
        width: `60vw`,
        backgroundColor: "#e9e9e9",
        minWidth: `20em`,
    },

    instance: {
        display: `flex`,
        color: '#eee',
        marginTop: `1em`,
        backgroundColor: `#cbcbcb`,
    },
    canvas: {
        width: `35vw`,
        height: `25vw`,
        minHeight: `4em`,
        backgroundColor: `#000`,
    },
    detail: {
        overflow: `hidden`,
        display: `flex`,
        flexDirection: `column`,
        color: '#0c0c0c',
        margin: `0 auto`,
        width: `100%`,
    },
    itemContainer: {
        display: `flex`,
        flexDirection: `column`,
        minWidth: `40vw`,
        maxHeight: `30em`,
        overflow: `scroll`,
    },
    context: {},
    item: {
        padding: `1em`,
        display: `flex`,
        flexDirection: `column`,
        height: `8vw`,
        minHeight: `4em`,
    },
    categoryContainer: {
        padding: 0,
        width: `20em`,
        overflow: `hidden`,
        marginTop: `1.3em`,
        height: `min-content`
    },
    categoryHeader: {
        backgroundColor: `#444444`,
        color: `#ffffff`,
        padding: `0.5em`,
    },
    category: {
        margin: `0.5em`,
    },
}));

function HomePage(props) {
    const classes = useStyles().classes;
    return (<Container>
        home
    </Container>)
}

export default HomePage;
