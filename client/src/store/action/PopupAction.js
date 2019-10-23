export const PopupType = {
    POPUP_SAVE_BLOG: "popup save blog",
    CLOSE: "close",
    SAVE_BLOG: "save blog",
};

//打开保存blog的弹框
export const PopupSaveBlog = ({msg}) => ({
    type: PopupType.POPUP_SAVE_BLOG,
    msg: msg,
});
//关闭弹窗
export const PopupClose = () => ({
    type: PopupType.CLOSE,
});

//保存blog
export const SaveBlog = () => ({
    type: PopupType.SAVE_BLOG,
});





