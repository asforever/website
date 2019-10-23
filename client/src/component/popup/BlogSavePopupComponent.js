import React from "react";
import PropTypes from 'prop-types';

import css from "./BlogSavePopupComponent.css";

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

    apply() {
        this.close();
        this.props.apply();
    }

    render() {
        return (
            <>
                <div className={css.container}>
                    <button className={css.close} onClick={this.close}>x</button>
                    <select className={css.category} defaultValue="Saab" onChange={this.categoryChange}>
                        <option>Volvo</option>
                        <option>Saab</option>
                        <option>Mercedes</option>
                        <option>Audi</option>
                    </select>
                    <button className={css.apply} onClick={this.apply}>apply</button>
                </div>
            </>
        )
    }
}

BlogSavePopupComponent.propTypes = {
    close: PropTypes.func,
    apply: PropTypes.func,
    categoryChange: PropTypes.categoryChange
};
