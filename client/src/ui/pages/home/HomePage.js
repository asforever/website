import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Link} from "react-router-dom";
import router from "../../router/router";

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';


import {createStyles, makeStyles} from '@material-ui/core/styles';
import LinkButton from "../../component/router/LinkButton";
import UserComponent from "../../component/user/UserComponent";
import {FetchUserRequest, PopupMsg} from "../../store/action";


const useStyles = makeStyles((theme) => createStyles({
    container: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
    },
    paper: {
        marginTop: `-10em`,
        border: `1px solid #999`,
        width: 400,
        boxShadow: theme.self.boxShadow,
        backgroundImage: theme.self.bgImg0,
    }
}));


function HomePage(props) {
    const classes = useStyles();
    const {user, dispatch} = props;
    const username = user.username;
    const routerLink = router.children.map((list, key) => {
        if (!list.component
            || list.name === "home"
            || list.name === "articleEditor"
            || list.name === "login"
        ) return;
        return <LinkButton key={key} name={list.name} path={list.path}/>

    });

    const onLogin = () => {
        props.history.push('login');
    };

    const onLogout = () => {
        dispatch(FetchUserRequest({user: {username: "username", password: "password"}}));
    };

    const onRegistered = () => {
        dispatch(PopupMsg("暂不开放"));
    };

    return <>
        <UserComponent username={username}
                       onLogin={onLogin}
                       onLogout={onLogout}
                       onRegistered={onRegistered}
        ></UserComponent>
        <div className={classes.container}>
            <Paper elevation={0} className={classes.paper}>
                <List aria-label="secondary mailbox folders">
                    {routerLink}
                </List>
            </Paper>
        </div>
    </>


}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    }
};

export default withRouter(connect(mapStateToProps)(HomePage));

