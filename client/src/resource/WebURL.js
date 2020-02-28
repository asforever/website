const ROOT_URL = process.env.NODE_ENV === "development" ? "http://localhost:9000/" : "http://95.169.9.37:9000/";

export class WebURL {
    static ROOT_URL = ROOT_URL;

    static SAVE_ARTICLE = WebURL.ROOT_URL + "save_article/";
    static ARTICLE = WebURL.ROOT_URL + "article/";
    static ARTICLE_CATEGORY = WebURL.ROOT_URL + "article_category/";
    static DELETE_ARTICLE = WebURL.ROOT_URL + "article/";

    static USER = WebURL.ROOT_URL + "user/";
}
