import {FetchActionType} from "../ActionType";

const SaveBlogRequest = ({params}) => ({
    type: FetchActionType.SAVE_BLOG_REQUEST,
    params: params,
});

const FetchBlogRequest = ({params}) => ({
    type: FetchActionType.FETCH_BLOG_REQUEST,
    params: params,
});

const FetchBlogCategoryRequest = () => ({
    type: FetchActionType.FETCH_BLOG_CATEGORY_REQUEST,
});

export {FetchBlogRequest, FetchBlogCategoryRequest, SaveBlogRequest}
