import React, {useEffect} from "react";
import {createStyles} from "../lib/yong-ui/util";
import {TreeNode} from "../lib/yong-ui/components/TreeNode";
import {connect} from "react-redux";
import Typography from "../lib/yong-ui/components/Typography";
import LinkButton from "../lib/yong-ui/components/LinkButton";
import ResourceNode from "../../app/data/store/ResourceNode";
import {DeleteArticleRequest, FetchArticleCategoryRequest, FetchArticleRequest} from "../store/action";
import {withRouter} from "react-router-dom";

const useStyles = createStyles((theme) => ({
    headContainer: {
        width: `100%`,
    },
    head: {
        padding: ` 0.2em 0 0.2em 0`,
    },
    toggle: {
        align: `center`,
        marginRight: `0.5em`,
    },
    row: {
        display: `flex`,
        justifyContent: `space-between`,
        width: `100%`,
    },
    button: {
        marginLeft: `4px`,
    }

}));


function RightBar(props) {
    const classes = useStyles();
    const {
        initResourceTree, deleteArticles, fetchArticles,
        history, location, resourceTree
    } = props;
    useEffect(() => {
        initResourceTree();
    }, []);


    const _handleClick = (evt, node) => {

        let path = node.data.path;

        if (node.level === 2) {
            fetchArticles(node.data.id);
            path = '/articles';
        }
        if (path && "/main" + path !== location.pathname) history.push("/main" + path);

    };
    const _handEditor = (node) => {
        return (event) => {
            console.log(node);
        }
    };
    const _handDelete = (node) => {
        return (event) => {
            deleteArticles(node.data.id);
        }
    };

    const list = (node) => {
        return (<>
            <div className={classes.row}>
                <Typography variant="h3" key={node.data.id}>{node.data.id}</Typography>
            </div>
            {node.level === 2 ? (<>
                <LinkButton onClick={_handDelete(node)}>
                    <Typography variant="h3">Del</Typography>
                </LinkButton></>) : null}
        </>)
    };

    return (
        <div className={classes.headContainer}>
            <TreeNode onClick={_handleClick} render={list} node={resourceTree}/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {

    const resourceTree = new ResourceNode({id: `列表`});
    const homeNode = new ResourceNode({id: "主页", path: `/home`});
    const exampleNode = new ResourceNode({id: "案例", path: `/examples`});
    const helpNode = new ResourceNode({id: "帮助", path: `/help`});
    resourceTree.addChild(homeNode);
    resourceTree.addChild(state.articleReducer.category);
    resourceTree.addChild(exampleNode);
    resourceTree.addChild(helpNode);

    return {
        resourceTree: resourceTree
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initResourceTree: (e) => {
            dispatch(FetchArticleCategoryRequest());
        },
        fetchArticles(category) {
            dispatch(FetchArticleRequest({category}))
        },
        deleteArticles(category) {
            dispatch(DeleteArticleRequest({category}))
        },
    }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RightBar));
