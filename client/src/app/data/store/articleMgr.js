import WebResource from "../../../resource/WebResource";
import userMgr from "./userMgr";

class ArticleMgr {
    constructor() {
        this.articles = {};
        this.categories = [];
        this.hasAllArticle = false;
        this.curCategory = "ALL";
    }

    async getArticleCategory() {
        let categories = this.categories;
        if (!categories.length) {
            let data = await WebResource.getArticleCategory();
            if (data.error) return data;
            data.forEach(category => {
                categories.push(category.category);
            });
        }
        return categories;
    }

    async getArticles(category) {
        this.curCategory = category ? category.toUpperCase() : "ALL";

        let articles = this.articles;
        let curArticles = articles[category];
        let fetchAllArticles = !category && !this.hasAllArticle;
        this.hasAllArticle = true;

        if (!curArticles || fetchAllArticles) {
            let data = await WebResource.getArticles({category: category});
            if (data.error) return data;
            data.forEach(article => {
                if (!articles[article.category]) {
                    articles[category] = curArticles = {};
                }
                curArticles[article.title] = article;
            });
        }
        return curArticles;
    }

    async createArticle(params) {
        if (!userMgr.user) return;

        let {title, category} = params;
        let {categories, articles} = this;

        let article = await WebResource.createArticle(params);
        if (!article.error) {
            if (!articles[category]) {
                articles[category] = {};
                categories.push(category);
            }
            articles[category][title] = article;

        }
        return article;
    }

    async deleteArticles(params) {
        if (!userMgr.user) return;

        let {title, category} = params;
        let {articles, categories} = this;
        let curArticles = articles[category];

        let result = await WebResource.deleteArticle(params);
        if (!result.error) {
            if (curArticles) {
                if (title) {
                    delete curArticles[title];
                } else {
                    delete articles[category];
                }
            }
            if (curArticles && !Object.keys(curArticles).length) {
                categories = categories.filter(v => {
                    return v !== category;
                });
                delete articles[category];
            }
        }
        return articles;
    }

}

const articleMgr = new ArticleMgr();
export default articleMgr;
