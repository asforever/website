import React from "react";
import {Link} from "react-router-dom";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function LinkButton(props) {
    const {path, name, className} = props;

    const RenderLink = React.forwardRef((props, ref) => (
        <Link to={path} {...props} innerRef={ref}/>
    ));

    return <ListItem className={className} button component={RenderLink}>
        <ListItemText primary={name} style={{textAlign: `center`}}/>
    </ListItem>
}

export default LinkButton;
