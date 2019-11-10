import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import LayOutComponent from "../../component/layout/LayoutComponent";
import CSS from "./ArticleTablePage.css";

import {FetchArticleCategoryRequest} from "../../store/action/ArticleAction";

export class ArticleTablePage extends React.Component {
    componentDidMount() {
        this.props.fetchArticleCategoryRequest();
    }

    render() {
        const categoryArr = this.props.articleCategory;
        const top = <>
            <Link to="home">HOME</Link>
            <Link to="articleEditor" className={CSS.headRight}>EDITOR</Link>
        </>;

        const left = categoryArr.map(category =>
            <div key={category.category}>{category.category}</div>
        );
        const main = <div>main</div>;
        const bottom = <div>bottom</div>;
        const className = CSS.container;

        return (
            <LayOutComponent  {...{className, top, left, main, bottom}}></LayOutComponent>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        articleCategory: state.article.articleCategory,
        articleContainer: state.article.articleContainer,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchArticleCategoryRequest: () => {
            dispatch(FetchArticleCategoryRequest());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleTablePage);
