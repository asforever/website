export default class WebResource {

    getMenuCategory() {
        if (!this.menuBar) {
            this.menuBar = ["主页", "文章", "案例", "帮助"];
        }
        return this.menuBar;
    }
    async getArticleCategory() {
        if (!this.articleCategory) {
            this.articleCategory = ["主页", "文章", "案例", "帮助"];
        }
        return this.articleCategory;
    }
}

const webResource = new WebResource();
export default webResource;
