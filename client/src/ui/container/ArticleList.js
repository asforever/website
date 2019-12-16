import React, {useState} from "react";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import ReactMarkDown from "react-markdown";
import Typography from "../lib/yong-ui/components/Typography";
import {Paper} from "../lib/yong-ui/components/Paper";
import LinkButton from "../lib/yong-ui/components/LinkButton";
import {createStyles} from "../lib/yong-ui/util";
import {DeleteArticleRequest} from "../store/action";
import {connect} from "react-redux";

const useStyles = createStyles(theme => ({
    container: {
        width: `100%`,
        height: `fit-content`,
        minHeight: `4em`,
        overflow: `hidden`,
        whiteSpace: `pre-wrap`
    },
    head: {
        display: `flex`,
        justifyContent: `space-between`,
        marginBottom: `0.7em`,
    },
    headRight: {
        display: `flex`,
        justifyContent: `end`,
        '& div': {
            marginLeft: `0.4em`,
        }
    },
    context: {}
}));

function ArticleList(props) {
    const classes = useStyles();
    const [showDetail, setShowDetail] = useState(false);
    const article = props.article;
    const {title, category, summary, content} = article;
    const {history, dispatch} = props;

    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };
    const toEdit = () => {
        history.push({
            "pathname": '/editor',
            article: article
        })
    };
    const delArticle = () => {
        dispatch(DeleteArticleRequest({category, title}));
    };

    return (<Paper className={classes.container}>
        <div className={classes.head}>
            <LinkButton onClick={toggleDetail}>{title}</LinkButton>
            <div className={classes.headRight}>
                <LinkButton onClick={toEdit}>Edit</LinkButton>
                <LinkButton onClick={delArticle}>Del</LinkButton>
            </div>
        </div>


        {!showDetail && <Typography>{summary}</Typography>}
        {showDetail && <ReactMarkDown source={content}></ReactMarkDown>}
    </Paper>)
}

ArticleList.propTypes = {
    article: PropTypes.object.isRequired
};

export default connect()(withRouter(ArticleList));
