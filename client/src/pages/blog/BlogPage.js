import React from "react";
import LayOutComponent from "../../component/layout/LayoutComponent";
import HeadPage from "./HeadPage";
import CategoryPage from "./CategoryPage";
import BlogCSS from "./Blog.css";
import {FileFormat, ResourceManager, WebURL} from "../../resource";
import {PopupClose} from "../../store/action/PopupAction";
import {FetchBlogCategory} from "../../store/action/FetchAction";
import {connect} from "react-redux";

export class BlogPage extends React.Component {
    componentDidMount() {
        this.props.fetchBlogCategory();
    }
    render() {
        const top = <HeadPage/>;
        const left = <CategoryPage/>;
        const main = <div>main</div>;
        const bottom = <div>bottom</div>;
        const className = BlogCSS.container;

        console.log(this.props.blogCategory);
        return (
            <LayOutComponent  {...{className, top, left, main, bottom}}></LayOutComponent>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        blogCategory: state.fetch.blogCategory,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBlogCategory: () => {
            dispatch(FetchBlogCategory());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
