export const PopupType = {
    POPUP_SAVE_BLOG: "popup save blog",
    CLOSE: "close",
    SAVE_BLOG: "save blog",
};

//打开保存blog的弹框
export const PopupSaveBlog = ({data}) => ({
    type: PopupType.POPUP_SAVE_BLOG,
    data: data,
});
//关闭弹窗
export const PopupClose = () => ({
    type: PopupType.CLOSE,
});

//保存blog
export const SaveBlog = (data) => ({
    type: PopupType.SAVE_BLOG,
    data: data,
});





