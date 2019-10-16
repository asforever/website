import React from "react";
import ReactMarkdown from "react-markdown";

import BlogEditorCSS from "./BlogEditor.css";

export default class BlogEditor extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.text =
            "# h1 \n\n" +
            "## h2 \n\n" +
            "### h3 \n\n";
    }

    onChange(e) {

    }

    render() {

        return (
            <div className={BlogEditorCSS.container}>
                {/* <textarea className={BlogEditorCSS.inputField} onChange={this.onChange}>render</textarea>
                <ReactMarkdown className={BlogEditorCSS.render}></ReactMarkdown>*/}
                <textarea value={this.text} className={BlogEditorCSS.inputField} onChange = {this.onChange}></textarea>
                <ReactMarkdown className={BlogEditorCSS.render} source={this.text}></ReactMarkdown>
            </div>
        )
    }
}

