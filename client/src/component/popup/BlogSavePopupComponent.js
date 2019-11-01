import React from "react";
import PropTypes from 'prop-types';

import css from "./BlogSavePopupComponent.css";
import {Blog} from "../../app";

export default class BlogSavePopupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.categoryChange = this.categoryChange.bind(this);
        this.close = this.close.bind(this);
        this.apply = this.apply.bind(this);
    }

    categoryChange(event) {
        this.props.categoryChange();
    }

    close() {
        this.props.close();
    }

    apply(e) {
        e.preventDefault();
        this.close();
        this.props.apply({
            title: e.target.children[0].value,
            category: e.target.children[1].value,
            summary: e.target.children[2].value
        });
    }

    render() {
        return (
            <>
                <div className={css.container}>
                    <div className={css.header}>
                        <button className={css.close} onClick={this.close}>x</button>
                    </div>
                    <form onSubmit={this.apply}>
                        目录：<input className={css.input}></input>
                        分类：<input className={css.input}></input>
                        <textarea className={css.textarea}></textarea>
                        <input type="submit" className={css.apply}></input>
                    </form>
                </div>
            </>
        )
    }
}

BlogSavePopupComponent.propTypes = {
    close: PropTypes.func,
    apply: PropTypes.func,
    categoryChange: PropTypes.func
};
