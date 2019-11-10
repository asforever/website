export class ArticleMgr {

    constructor() {
        this.articleContainer = {};
        this.articleCategory = [];
    }

    setArticleCategory(category) {
        this.articleCategory = category;
    }

    addArticles(articles) {
        const container = this.articleContainer;
        articles.forEach(article => {
            if (!container[article.category]) container[article.category] = [];
            container[article.category].push(article);
        });
    }

    clone(depth) {
        const newMgr = new ArticleMgr();
        newMgr.articleContainer = this.articleContainer;
        newMgr.articleCategory = this.articleCategory;
        return newMgr;
    }

}
