import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {DeleteArticleRequest, FetchArticleCategoryRequest, FetchArticleRequest} from "../../store/action/ArticleAction";
import LinkButton from "../../component/router/LinkButton";

import clsx from 'clsx';
import {makeStyles, useTheme, createMuiTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {ArticleViewPage} from './ArticleViewPage';
import {PopupMsg} from "../../store/action";


const categoryBarWidth = 240;
const headHeight = 3;
const useStyles = makeStyles(theme => {
    return {
        container: {
            display: `flex`,
            width: `100vw`,
            height: `100vh`,
            justifyContent: `center`,
            alignItems: `center`,
        },
        container2: {
            display: `flex`,
            justifyContent: `flex-start`,
            width: `80vw`,
            height: `80vh`,
            borderRadius: `10px`,
            boxShadow: theme.self.boxShadow,
            backgroundImage: theme.self.bgImg0,
        },
        title: {
            flexGrow: 1,
        },
        mainBar: {
            width: `100%`,
            background: `none`,
        },
        articleSum: {
            paddingTop: `1em`,
        },
        articleTitle: {
            padding: 0,
            height: `2em`,
            '& h3': {
                ...theme.self.fontStyle0,
            },
            '& a': {
                width: `100%`,
            }

        },
        mainHeader: {
            display: `flex`,
            justifyContent: `space-between`,
            height: `${headHeight}em`
        },
        content: {
            padding: `2rem`,
            minHeight: `calc(100% - 7em)`,
        },
        menuButton: {
            marginRight: theme.spacing(1),
        },
        hide: {
            display: 'none',
        },
        categoryBar: {
            width: `${categoryBarWidth}px`,
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            borderLeft: theme.self.border
        },
        categoryBarShift: {
            width: `0`,
            transition: theme.transitions.create(['width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            border: '0'
        },
        categoryBarPaper: {
            ...theme.self.scrollBar,
            overflowX: `hidden`,
            padding: 0,
            margin: 0,
            height: `100%`,
            background: 'rgba(0,0,0,0)',
            border: `none`,
        },
        categoryBarHeader: {
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            height: `${headHeight}em`,
        },
    }
});

function ArticleTablePage(props) {
    const [categoryBarOpen, setCategoryBarOpen] = React.useState(false);
    const [category, setCategory] = React.useState();
    const [curArticle, setArticle] = React.useState();

    const {articleCategory, articleContainer, user} = props;
    const username = user.username;
    const classes = useStyles();
    let categoryArr = Object.keys(articleCategory);
    if ((!category || !articleCategory[category]) && categoryArr.length) {
        let newCategory = categoryArr[0];
        if (newCategory && newCategory !== category) setCategory(newCategory)
    }


    let articles = articleContainer[category] || [];

    useEffect(() => {
        props.fetchArticleCategoryRequest()
    }, []);

    useEffect(() => {
        if (category) props.fetchArticleRequest(category);
    }, [category]);

    const toggleCategoryBar = () => {
        setCategoryBarOpen(!categoryBarOpen);
    };

    const toHome = () => {
        props.history.push('home');
    };

    const toEditorArticle = (article) => {
        props.history.push({
            pathname: "articleEditor",
            article: article,
        });
    };

    const toArticleView = (article) => {
        setArticle(article);
    };

    const selectCategory = (selectedCategory) => () => {
        setCategory(selectedCategory);
        setArticle(null);
    };

    const deleteArticle = (category, title) => {
        return props.deleteArticleRequest(username, category, title);
    };


    return (<div className={classes.container}>
        <div className={classes.container2}>

            <div className={classes.mainBar}>
                <div className={classes.mainHeader}>
                    <div>
                        <IconButton
                            onClick={toHome}
                        >
                            <HomeIcon/>
                        </IconButton>
                        <IconButton
                            onClick={toEditorArticle}
                        >
                            <ListAltIcon/>
                        </IconButton>
                    </div>
                    <IconButton
                        aria-label="open drawer"
                        onClick={toggleCategoryBar}
                        edge="start"
                        className={clsx(classes.menuButton, categoryBarOpen && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </div>
                <Divider/>
                {curArticle ?
                    <ArticleViewPage article={curArticle}></ArticleViewPage> :
                    <>
                        <div className={classes.content}>
                            {articles.map((article, index) => (
                                <div key={article.title} className={classes.articleSum}>
                                    <ListItem className={classes.articleTitle}>
                                        <a href="#" onClick={(e) => {
                                            e.preventDefault();
                                            toArticleView(article);
                                        }}>
                                            <h3>{article.title}</h3>
                                        </a>
                                        <IconButton onClick={() => {
                                            toEditorArticle(article)
                                        }}>
                                            <EditIcon/>
                                        </IconButton>
                                        <IconButton onClick={() => deleteArticle(article.category, article.title)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </ListItem>
                                    <Typography component="p">
                                        {article.summary}
                                    </Typography></div>
                            ))}
                        </div>
                    </>}
            </div>


            <div
                className={categoryBarOpen ? classes.categoryBar : classes.categoryBarShift}
            >
                <Paper className={classes.categoryBarPaper}>
                    <div className={classes.categoryBarHeader}>
                        <IconButton onClick={toggleCategoryBar}>
                            <ChevronRightIcon/>
                        </IconButton>
                    </div>
                    <List>
                        {categoryArr.map((curCategory, index) => (
                            <ListItem onClick={selectCategory(curCategory)} selected={curCategory === category} button
                                      key={curCategory}>
                                <ListItemText primary={curCategory}/>
                                <IconButton onClick={() => deleteArticle(curCategory)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            </div>
        </div>
    </div>)
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleCategory: state.article.articleCategory,
        articleContainer: state.article.articleContainer,
        user: state.user,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchArticleCategoryRequest: async () => {
            await dispatch(FetchArticleCategoryRequest());
        },
        fetchArticleRequest: (category) => {
            dispatch(FetchArticleRequest({category: category}));
        },
        deleteArticleRequest: (username, category, title) => {

            if (!username) dispatch(PopupMsg("您木有权限"));
            else dispatch(DeleteArticleRequest({category: category, title: title}));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTablePage);
