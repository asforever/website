import React from "react";
import ReactMarkdown from "react-markdown";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => {
    return {
        container: {
            padding: `2em`,
        },
        content: {
            paddingLeft: `2em`,
        }
    }
});

export function ArticleViewPage(props) {
    const {article} = props;
    const classes = useStyles();

    return <div className={classes.container}>
        <h2>{article.title}</h2>
        <ReactMarkdown className={classes.content} source={article.content}></ReactMarkdown>
    </div>

}

