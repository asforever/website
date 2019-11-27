import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowForwardIos from '@material-ui/icons/ArrowForwardIos';
import {makeStyles} from "@material-ui/core";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    container: {
        position: `absolute`,
        width: `1em`,
        display: `flex`,
        flexDirection: `column`,
        background: `#333333`,
        borderRadius: `0px 0px 1em 1em`,
        boxShadow: `5px 7px 10px rgba(86, 86, 86, 0.9)`,
        fontSize: `0.5em`,
        "& button": {
            fontSize: `0.5em`,
            minWidth: 0
        }
    }
}));


const UserComponent = (props) => {
    const {username, onLogin, onLogout, onRegistered} = props;
    const classes = useStyles();
    const hasUser = Boolean(username);

    return (
        <ListItem className={classes.container}>
            {hasUser ? <IconButton><AccountCircle/> </IconButton> : <Button onClick={onLogin}>登陆</Button>}
            {hasUser ? <Button onClick={onLogout}>登出</Button> : <Button onClick={onRegistered}>注册</Button>}
        </ListItem>)
};


UserComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onRegistered: PropTypes.func.isRequired,
};

export default UserComponent;
