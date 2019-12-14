import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import {Container} from "../lib/yong-ui/components/Container";
import image from "../../assets/bk_wrapper.png";

const useStyles = createStyles((theme) => ({
    container: {
        minWidth: `30em`,
    },
    opacityBG: {
        width: `60em`,
        minHeight: `calc(120vh - 4em)`,
        backgroundColor: `#aaaaaaaa`,
        padding: `0.5em`,
        margin: `2em`,
    },
    container2: {
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
    return (<Container className={classes.container}>
        <div className={classes.opacityBG}>
            <div className={classes.container2}>
                <div>
                    <div className={classes.bkWrapper}>
                        <img alt={"img"} src={image}/>
                    </div>
                </div>
                <div className={classes.context} children={props.children}/>
            </div>
        </div>
    </Container>)
}

export default MainBG;
