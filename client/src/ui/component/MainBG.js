import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import {Container} from "../lib/yong-ui/components/Container";
import image from "../../assets/bk_wrapper.png";

const useStyles = createStyles((theme) => ({
    opacityBG: {
        width: `60vw`,
        height: `calc(100vh - 4em)`,
        minWidth: `30em`,
        backgroundColor: `#aaaaaaaa`,
        padding: `0.5em`,
        margin: `1em`,
    },
    container: {
        width: `100%`,
        height: `100%`,
        backgroundColor: `#fff`,
        display: `flex`,
        flexDirection: `column`,
    },
    bkWrapper: {
        width: `100%`,
        display: `flex`,
        justifyContent: `flex-end`,
    },
    context: {
        padding: `1em`,
    }
}));

function MainBG(props) {
    const classes = useStyles();
    return (<Container>
        <div className={classes.opacityBG}>
            <div className={classes.container}>
                <div>
                    <div className={classes.bkWrapper}>
                        <img src={image}></img>
                    </div>
                </div>
                <div className={classes.context} children={props.children}></div>
            </div>
        </div>
    </Container>)
}

export default MainBG;
