import React from "react";
import {Container} from "../lib/yong-ui/components/Container";
import {createStyles} from "../lib/yong-ui/util";
import {connect} from "react-redux";
import {Paper} from "../lib/yong-ui/components/Paper";
import ReactMarkdown from "react-markdown";
import ArticleList from "../container/ArticleList";


let useStyles = createStyles((theme) => ({
    container: {
        minHeight: `100vh`,
    },
    listContainer: {
        display: `flex`,
        flexDirection: `column`,
    }
}));

function ArticlePage(props) {
    const classes = useStyles();
    const {articles = []} = props;

    return (<Container className={classes.container}>
        {articles.map(article => (
            <ArticleList article={article} className={classes.listContainer} key={article.title}/>
        ))}

    </Container>)
}

const mapStateToProps = (state, ownProps) => {
    return {
        articles: state.articleReducer.curArticles
    }

};


export default connect(mapStateToProps)(ArticlePage);
