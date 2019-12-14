import WebResource from "../../../resource/WebResource";
import ResourceNode from "./ResourceNode";

class ArticleMgr {
    constructor() {
        this.articleTree = new ResourceNode({id: `文章`, path: `/articles`});
        this.curCategory = "";
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
        if (!child) return null;

        let articles = child.data.articles;
        if (!articles) {
            let data = await WebResource.getArticles({category: category});
            if (data.error) return data;
            articles = child.data.articles = data;//bug
        }
        this.curCategory = category;
        return articles;
    }

    async createArticle(params) {
        let {title, category} = params;
        let child = this.articleTree.getChild(category);
        if (!child) child = this.createArticleCategory(category);
        let articles = child.data.articles;
        let article = await WebResource.createArticle(params);
        if (!articles) articles = this.createArticleCategory(category);
        articles[title] = article;
        return article;
    }

    async deleteArticles(params) {
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
            if (!Object.keys(articles).length) delete articles[title];
            await WebResource.deleteArticle(params);
        }

    }

    createArticleCategory(category) {
        const node = new ResourceNode({id: category, articles: null});
        return this.articleTree.addChild(node);
    }
}

const articleMgr = new ArticleMgr();
export {articleMgr};
