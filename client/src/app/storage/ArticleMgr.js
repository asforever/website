import {Article} from "../data/Article";
import {instanceOf} from "prop-types";

export class ArticleMgr {

    constructor() {
        this.articleContainer = {};
        this.articleCategory = {};
    }

    loadArticleCategory(data) {
        if (!(data instanceof Array)) return this.articleCategory;
        data.forEach(v => {
            this.articleCategory[v.category] = true;
        });
    }

    loadArticles(data) {
        const container = this.articleContainer;
        data.forEach(articleData => {
            let article = new Article(articleData);
            this.addArticle(article);
        });
        return this.articleContainer;
    }

    addArticle(article) {
        const container = this.articleContainer;
        if (!container[article.category]) container[article.category] = [];
        container[article.category].push(article);

        this.articleCategory[article.category] = true;
    }

    deleteArticles(category, title) {
        let container = this.articleContainer;
        let articleCategory = this.articleCategory;
        let arr = container[category];
        let oldLength = arr.length;

        if (arr) {
            if (title) container[category] = arr.filter((v) => v.title !== title);
            if (!title || !container[category].length) {
                delete container[category];
                delete articleCategory[category];
            }
            if (!container[category] || container[category].length !== oldLength) return true;
        } else {
            return false
        }
    }

    clone(depth) {
        const newMgr = new ArticleMgr();
        newMgr.articleContainer = Object.assign({}, this.articleContainer);
        newMgr.articleCategory = Object.assign({}, this.articleCategory);
        return newMgr;
    }

}
