import React from "react";
import {createStyles} from "../lib/yong-ui/util";
import PropTypes from "prop-types";
import RouteBar from "./RouteBar";
import router from "../router/router";
import {connect} from "react-redux";
import CloseIcon from "../lib/yong-ui/icons/CloseIcon";
import IconButton from "../lib/yong-ui/components/IconButton";
import SignOutIcon from "../lib/yong-ui/icons/SignOutIcon";
import UserIcon from "../lib/yong-ui/icons/UserIcon";

const useStyles = createStyles((theme) => ({
    headContainer: {
        width: `100%`,
        borderBottom: `1px Dashed #ccc`,
        borderTop: `1px Dashed #ccc`,
        display: `flex`,
        justifyContent: `space-between`,
    },
    rightContainer: {
        display: `flex`,
        alignItems: `center`,
    },
    rightList: {
        marginRight: `1em`,
    }
}));

function HeadBar(props) {
    const classes = useStyles();
    const routerArr = Object.values(router.home.children);
    const user = props.user;

    let routerUser = [router.signin, router.signup];
    const signOut = () => {

    };

    return (
        <div className={classes.headContainer}>
            <RouteBar routes={routerArr}/>
            {!user ? <div className={classes.rightContainer}>
                    <UserIcon className={classes.rightList}/>
                    <IconButton className={classes.rightList} onClick={signOut} icon={(<SignOutIcon/>)}/>
                </div>
                : <RouteBar routes={routerUser}/>}
        </div>
    )
}

HeadBar.propTypes = {
    routes: PropTypes.array,
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducer.curUser
    }
};

export default connect(mapStateToProps)(HeadBar);
