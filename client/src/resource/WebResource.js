import FetchUtil from "./FetchUtil";
import {WebURL} from "./WebURL";


const createArticle = async (params) => {
    const options = {
        url: WebURL.SAVE_ARTICLE,
        params: params,//{title,category,summary,content}
        method: "POST"
    };
    return await FetchUtil.fetch(options);
};

const getArticleCategory = async () => {
    const options = {
        url: WebURL.ARTICLE_CATEGORY,
    };
    return await FetchUtil.fetch(options);
};

const getArticles = async (params) => {
    const category = params.category;
    const options = {
        url: WebURL.ARTICLE,
        params: [category],
    };
    return await FetchUtil.fetch(options);
};

const deleteArticle = async (params) => {
    let {title, category} = params;
    const options = {
        url: WebURL.DELETE_ARTICLE,
        params: [category, title],
        method: "DELETE",
    };
    return await FetchUtil.fetch(options);
};

const getUser = async (params) => {
    const options = {
        url: WebURL.USER,
        params: params,
        method: "POST",
    };
    return await FetchUtil.fetch(options);
};


export default {
    createArticle, getArticles, getArticleCategory, deleteArticle,
    getUser
};
