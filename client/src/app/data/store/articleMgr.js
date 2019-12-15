import WebResource from "../../../resource/WebResource";
import ResourceNode from "./ResourceNode";

class ArticleMgr {
    constructor() {
        this.articleTree = new ResourceNode({id: `文章`, path: `/articles`});
    }

    async getArticleCategory() {
        let category = this.articleTree.children;
        if (!Object.keys(category).length) {
            let data = await WebResource.getArticleCategory();
            if (data.error) return data;
            data.forEach(category => {
                this.createArticleCategory(category.category);
            });
            category = this.articleTree.children;
        }
        return category;
    }

    async getArticles(category) {
        let child = this.articleTree.getChild(category);
        if (!child) return {};

        let articles = child.data.articles;
        if (!articles) {
            let data = await WebResource.getArticles({category: category});
            if (data.error) return data;

            articles = {};
            data.forEach(article => {
                articles[article.title] = article;
            });
            child.data.articles = articles;
        }
        return articles;
    }

    async createArticle(params) {
        let {title, category} = params;
        let article = await WebResource.createArticle(params);
        if (!article.error) {
            let child = this.articleTree.getChild(category);
            if (!child) child = this.createArticleCategory(category);
            let articles = child.data.articles || {};
            articles[title] = article;
            child.data.articles = articles;
        }
        return article;
    }

    async deleteArticles(params) {
        let result = await WebResource.deleteArticle(params);
        if (!result.error) {
            let {title, category} = params;
            let children = this.articleTree.children;
            let child = this.articleTree.children[category];

            if (child) {
                let articles = child.data.articles;
                if (title) {
                    delete articles[title];
                } else {
                    delete children[category];
                }
                if (articles && !Object.keys(articles).length) {
                    delete children[title];
                }
            }
        }
        return result;
    }

    createArticleCategory(category) {
        const node = new ResourceNode({id: category, articles: null});
        return this.articleTree.addChild(node);
    }
}

const articleMgr = new ArticleMgr();
export {articleMgr};
