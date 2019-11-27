import {Article} from "../data/Article";
import {StorageMgr} from "../storage/StorageMgr";
import {ResourceManager, WebURL} from "../../resource";
import {OperatorType} from "./OperatorType";

const articleMgr = StorageMgr.getInstance().articleMgr;
let userMgr = StorageMgr.getInstance().userMgr;

const createArticle = async (params) => {
    if (!Boolean(userMgr.username)) return {};
    const options = {
        url: WebURL.SAVE_ARTICLE,
        params: params,
        method: "POST"
    };
    const result = {};
    const {response, error} = await ResourceManager.send(options);
    if (response) {
        const article = new Article(params);
        articleMgr.addArticle(article);
    }

    return  {response: articleMgr.articleContainer, error: result.error};
};

let hasCategory = false;
const getArticleCategory = async () => {
    if (hasCategory) {
        return {response: articleMgr.articleCategory, error: null};
    }
    hasCategory = true;
    const options = {
        url: WebURL.ARTICLE_CATEGORY,
    };

    const result = await ResourceManager.send(options);
    if (result.response) articleMgr.loadArticleCategory(result.response);
    return {response: articleMgr.articleCategory, error: result.error};
}

const getArticle = async (params) => {
    let category = params.category;
    if (articleMgr.articleContainer[category]) {
        return {response: articleMgr.articleContainer[category], error: null};
    }

    const options = {
        url: WebURL.ARTICLE,
        params: [category],
    };

    const result = await ResourceManager.send(options);
    if (result.response) articleMgr.loadArticles(result.response);
    return {response: articleMgr.articleContainer, error: result.error};

};

const deleteArticle = async (params) => {
    let {category, title} = params;
    if (!Boolean(userMgr.username)) return {};
    let result = articleMgr.deleteArticles(category, title);

    if (result) {
        const options = {
            url: WebURL.DELETE_ARTICLE,
            params: params,
            method: "DELETE",
        };
        return await ResourceManager.send(options);
    } else {
        return {response: false, error: false};
    }
};


export default {
    [OperatorType.CREATE_ARTICLE]: createArticle,
    [OperatorType.GET_ARTICLE_CATEGORY]: getArticleCategory,
    [OperatorType.GET_ARTICLE]: getArticle,
    [OperatorType.DELETE_ARTICLE]: deleteArticle,
};
