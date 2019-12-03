import React from "react";
import {Container} from "../lib/yong-ui/components/Container";
import {createStyles} from "../lib/yong-ui/util";



let useStyles = createStyles((theme) => ({
    paper: {
        minHeight: `100vh`,
        width: `60vw`,
        backgroundColor: "#eee",
        minWidth: `20em`,
    },

    instance: {
        display: `flex`,
        color: '#eee',
        marginTop: `1em`,
        backgroundImage: `linear-gradient(#dcdcdc, #cacaca,#c5c5c5)`,
    },
    canvas: {
        width: `35vw`,
        height: `25vw`,
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
        height: `100%`,
    },
    item: {
        padding: `1em`,
        display: `flex`,
        flexDirection: `column`,
        height: `6em`,
    },
    categoryContainer: {
        height: `100%`,
        width: `20em`,
        overflow: `hidden`,
        flexFlow: `row wrap`,
        float: `right`,
    },
    category: {
        margin: `1.0em  2em  0em 2em `,
    },
}));

function ArticlePage(props) {
    const classes = useStyles().classes;

    return (<Container>
        article
    </Container>)
}

export default ArticlePage;
