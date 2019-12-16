import React, {useState} from "react";
import PropTypes from "prop-types";
import {createStyles} from "../util";
import ListButton from "./ListButton";

const useStyles = createStyles((theme) => {
    return {
        children: {
            paddingLeft: `1em`,
        },
        row: {
            padding: `0.5em 0 0.5em 0`,
            display: `flex`,
            cursor: `pointer`,
            userSelect: `none`,
            width: `100%`
        },
        hr: {
            border: `1px solid #ddd`,
            borderBottom: `none`,
            margin: 0,
        },
        toggle: {
            width: `1em`,
        }
    }
});

function TreeNode(props) {
    const {node, onClick, render} = props;
    const classes = useStyles();
    const [useChildren, setUseChildren] = useState(true);

    const _handleClick = (_node) => {
        return (evt) => {
            if (onClick) onClick(evt, _node)
        };
    };
    const handToggle = (evt) => {
        evt.preventDefault();
        setUseChildren(!useChildren);
    };

    const maxDepth = props.maxDepth || 5;
    const depth = props.depth === undefined ? 0 : props.depth;
    const children = Object.values(node.children);
    return (<div>
        <ListButton onClick={_handleClick(node)} className={classes.head}>
            <div className={classes.row}>
                {children.length > 0 ?
                    <ListButton className={classes.toggle} onClick={handToggle}>
                        {useChildren ? "- " : "+"}
                    </ListButton>
                    : null
                }
                {render(node)}
            </div>
        </ListButton>
        <hr className={classes.hr}/>
        {useChildren ? <div className={classes.children}>
            {children.map(cNode => <TreeNode onClick={onClick}
                                             depth={depth + 1}
                                             render={render}
                                             key={cNode.data.id}
                                             node={cNode}/>)}
        </div> : null}
    </div>);
}

TreeNode.propTypes = {
    node: PropTypes.shape({
        data: PropTypes.oneOfType([PropTypes.object]),
        children: PropTypes.object
    }),
    maxDepth: PropTypes.number,
    depth: PropTypes.number,
    onClick: PropTypes.func,
    render: PropTypes.func
};

export {TreeNode}
