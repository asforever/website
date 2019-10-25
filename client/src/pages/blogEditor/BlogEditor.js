import React from "react";
import {connect} from "react-redux";
import ReactMarkdown from "react-markdown";

import BlogEditorCSS from "./BlogEditor.css";
import {PopupSaveBlog} from "../../store/action/PopupAction";
import {Blog} from "../../app";

class BlogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            title: "Title 1",
            summary: "Summary",
            content: "*# h1* \n" +
                "## h2 \n" +
                "## h3 \n" +
                "![Benjamin Bannekat](//www.baidu.com/img/baidu_jgylogo3.gif)"
        }
    }

    onChange(e) {
        this.setState({
            content: e.target.value
        });
    }


    render() {
        const MarkHeading = ReactMarkdown.renderers.heading;
        return (
            <div className={BlogEditorCSS.container}>
                <div className={BlogEditorCSS.head}>
                    <a href="#" onClick={(e) => this.props.popupSaveBlog(e, this.state)}>save</a>
                </div>
                <textarea className={BlogEditorCSS.inputField} defaultValue={this.state.content}
                          onChange={this.onChange}></textarea>
                <ReactMarkdown className={BlogEditorCSS.render} source={this.state.content}
                ></ReactMarkdown>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        popupSaveBlog: (e, state) => {
            e.preventDefault();
            const blog = new Blog(state);
            dispatch(PopupSaveBlog({data: blog}));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogEditor);

