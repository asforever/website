import React from "react";
import {connect} from "react-redux";
import ReactMarkdown from "react-markdown";

import CSS from "./ArticleEditor.css";
import {PopupSaveArticle} from "../../store/action/PopupAction";

const defaultContent = "*# h1* \n" +
    "## h2 \n" +
    "## h3 \n" +
    "![Benjamin Bannekat](//www.baidu.com/img/baidu_jgylogo3.gif)";

class ArticleEditorPage extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            content: defaultContent
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
            <div className={CSS.container}>
                <div className={CSS.head}>
                    <a href="#" onClick={(e) => this.props.popupSaveArticle(e, this.state)}>save</a>
                </div>
                <textarea className={CSS.inputField} defaultValue={this.state.content}
                          onChange={this.onChange}></textarea>
                <ReactMarkdown className={CSS.render} source={this.state.content}
                ></ReactMarkdown>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        popupSaveArticle: (e, state) => {
            e.preventDefault();
            dispatch(PopupSaveArticle({content: state.content}));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditorPage);

