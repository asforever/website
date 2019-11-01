const ROOT_URL = process.env.NODE_ENV === "development" ? "http://localhost:9000/" : "http://95.169.6.128:9000/";

export class WebURL {
    static ROOT_URL = ROOT_URL;
    static SAVE_BLOG = WebURL.ROOT_URL + "save_blog/";
    static BLOG = WebURL.ROOT_URL + "blog/";
    static BLOG_CATEGORY = WebURL.ROOT_URL + "blogCategory/";
}
