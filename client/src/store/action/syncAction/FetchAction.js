import {FetchActionType} from "../ActionType";
export const SaveBlog = ({params}) => ({
    type: FetchActionType.SAVE_BLOG,
    params: params,
});

export const FetchBlog = ({params}) => ({
    type: FetchActionType.FETCH_BLOG,
    params: params,
});

export const FetchBlogCategory = () => ({
    type: FetchActionType.FETCH_BLOG_CATEGORY,
});
