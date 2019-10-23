import React from "react";
import {connect} from "react-redux";
import {PopupClose, PopupType, SaveBlog} from "../../store/action/PopupAction";
import BlogSavePopupComponent from "../../component/popup/BlogSavePopupComponent";

class PopupContainer extends React.Component {

    render() {
        let child = null;
        switch (this.props.type) {
            case PopupType.POPUP_SAVE_BLOG:
                child = <BlogSavePopupComponent categoryChange = {()=>{}} apply = {this.props.saveBlog} close={this.props.close}></BlogSavePopupComponent>;
                break;
            case PopupType.CLOSE:
                return null;
            default:
                return null;
        }

        return <div>{child}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        type: state.popup.type
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        close: (e) => {
            dispatch(PopupClose());
        },
        saveBlog:(blogInfo)=>{
            dispatch(SaveBlog(blogInfo));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);

