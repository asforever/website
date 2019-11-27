import React, {useEffect} from "react";
import {connect} from "react-redux";
import {useSnackbar} from 'notistack';

import FormComponent from "../../component/list/FormComponent";

import {ClosePopupSaveArticle} from "../../store/action/PopupAction";
import {SaveArticleRequest} from "../../store/action/ArticleAction";
import {PopupMgr} from "../../../app/storage/PopupMgr";

const saveList = ['目录', '分类', '摘要'];

function PopupContainerPage(props) {
    let children = [];
    const saveArticlePopup = props.popupContainer[PopupMgr.SAVE_ARTICLE_POPUP];
    const msgPopup = props.popupContainer[PopupMgr.MSG_POPUP];
    const {enqueueSnackbar} = useSnackbar();

    const onSave = () => {
        return (submitData) => {
            const title = submitData[saveList[0]];
            const category = submitData[saveList[1]];
            const summary = submitData[saveList[2]];
            const content = saveArticlePopup[0].content;
            props.onSave({title, category, summary, content});
        }
    };

    if (saveArticlePopup.length) {
        children.push(<FormComponent
            key="articleSave"
            autoClose={true}
            listData={saveList}
            bottomData={["保存", "关闭"]}
            onApply={onSave()}
            onClose={props.onCloseSave}>
        </FormComponent>);
    }

    useEffect(() => {
        if (msgPopup.length) {
            enqueueSnackbar(msgPopup.pop(), {autoHideDuration: 700})
        }
    }, [props.popupContainer]);


    return <>
        {children}
    </>

}

const mapStateToProps = (state, ownProps) => {
    return {
        type: state.popup.type,
        popupContainer: state.popup.popupContainer,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCloseSave: (e) => {
            dispatch(ClosePopupSaveArticle());
        },
        onSave: (params) => {
            dispatch(SaveArticleRequest(params));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainerPage);

