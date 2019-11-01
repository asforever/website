import React from "react";
import {connect} from "react-redux";

import BlogSavePopupComponent from "../../component/popup/BlogSavePopupComponent";

import {PopupClose} from "../../store/action/syncAction/PopupAction";
import {SaveBlog} from "../../store/action/syncAction/FetchAction";
import {PopupActionType} from "../../store/action/ActionType";

class PopupContainerPage extends React.Component {

    render() {
        let child = null;
        switch (this.props.type) {
            case PopupActionType.POPUP_SAVE_BLOG:
                child = <BlogSavePopupComponent categoryChange={() => {
                }} apply={(submitData) => this.props.saveBlog(submitData, this.props.data)}
                                                close={this.props.close}></BlogSavePopupComponent>;
                break;
            case PopupActionType.POPUP_CLOSE:
                return null;
            default:
                return null;
        }

        return <div>{child}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        type: state.popup.type,
        data: state.popup.data,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        close: (e) => {
            dispatch(PopupClose());
        },
        saveBlog: (submitData, propData) => {
            dispatch(SaveBlog({params: Object.assign({}, submitData, propData)}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainerPage);

