import React from "react";
import {connect} from "react-redux";
import ReactMarkdown from "react-markdown";

import BlogEditorCSS from "./BlogEditor.css";
import {PopupSaveBlog} from "../../store/action/PopupAction";

class BlogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            text: "*# h1* \n" +
                "## h2 \n" +
                "### h3 \n" +
                "![Benjamin Bannekat](//www.baidu.com/img/baidu_jgylogo3.gif)"
        }
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }


    render() {
        const MarkHeading = ReactMarkdown.renderers.heading;
        return (
            <div className={BlogEditorCSS.container}>
                <div className={BlogEditorCSS.head}>
                    <a href="#" onClick={this.props.onClick}>save</a>
                </div>
                <textarea className={BlogEditorCSS.inputField} defaultValue={this.state.text}
                          onChange={this.onChange}></textarea>
                <ReactMarkdown className={BlogEditorCSS.render} source={this.state.text}
                ></ReactMarkdown>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: (e) => {
            e.preventDefault();
            dispatch(PopupSaveBlog({msg: "test"}));
        }
    }
};

const mapStateToProps = (state, ownProps) => {
    return {}
};


export default connect(mapStateToProps, mapDispatchToProps)(BlogEditor);

