import React from "react";
import PropTypes from "prop-types";

function TreeDom(props) {
    const rootNodeChildren = props.rootNode.children;
    return (rootNodeChildren.map(node => {

        return <div>text</div>
    }))
}

TreeDom.propTypes = {
    rootNode: PropTypes.shape({
        data: PropTypes.object,
        children: PropTypes.array
    }),
};

export {TreeDom}
