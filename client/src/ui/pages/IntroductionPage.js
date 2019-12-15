import React from "react";
import {Container} from "../lib/yong-ui/components/Container";
import {createStyles} from "../lib/yong-ui/util";;

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

function IntroductionPage(props) {
    const classes = useStyles().classes;
    return (<Container>
        IntroductionPage
    </Container>)
}

export default IntroductionPage;
