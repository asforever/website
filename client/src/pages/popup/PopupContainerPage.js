import React from "react";
import {connect} from "react-redux";

import ArticleSavePopupComponent from "../../component/popup/ArticleSavePopupComponent";

import {ClosePopupSaveArticle} from "../../store/action/PopupAction";
import {SaveArticleRequest} from "../../store/action/ArticleAction";
import {PopupMgr} from "../../app/storage/PopupMgr";

class PopupContainerPage extends React.Component {

    render() {

        let children = [];
        const saveArticlePopup = this.props.popupContainer[PopupMgr.SAVE_ARTICLE_POPUP];
        if (saveArticlePopup) {
            saveArticlePopup.forEach(data => {
                children.push(<ArticleSavePopupComponent key="articleSave" categoryChange={() => {
                }} apply={(submitData) => this.props.saveArticle(submitData, data)} close={this.props.close}>
                </ArticleSavePopupComponent>);
            });

        }
        /*  if (popupContainer) {

          }

          this.props.msgArr.forEach((msg, key) => {
              children.push(<p key={key}>{msg.data}</p>)
          });*/

        return <>
            {children}
        </>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        type: state.popup.type,
        popupContainer: state.popup.popupContainer,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        close: (e) => {
            dispatch(ClosePopupSaveArticle());
        },
        saveArticle: (submitData, propData) => {
            dispatch(SaveArticleRequest({params: Object.assign({}, submitData, propData)}));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainerPage);

