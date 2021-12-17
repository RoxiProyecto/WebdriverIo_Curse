import BasePage from "./base.page";

class ArticlePage extends BasePage {

    // selectores
    get article() {return '.ajax_block_product'; }
    get btnCardAdd(){return '.ajax_add_to_cart_button';}
    get msgArticleInCard(){return '.icon-ok';}
    get articleCard (){return $('#layer_cart_product_title');}
   
    //metodos
    async getArticle() {
        try {
            const article = await browser.$(this.article);
            return await article.getValue();

        } catch (error) {
            console.log('error in getArticle');
        }
    }
    async addToaCard(){
        try {
        const btnCard = await browser.$(this.btnCardAdd);
           await btnCard.Click();  
        } catch (error) {
            console.log('error in addToaCard');
        }
    }
    async articleInCardMsgLayer(){
        try {
        const btnCard = await browser.$(this.msgArticleInCard);
           return await btnCard.getValue();  
        } catch (error) {
            console.log('error in addToaCard');
        }
    }
    async articleInCardLayer(){
        try {
        const articleCardLayer= await this.msgPage.getText();;
         return articleCardLayer ;  
        } catch (error) {
            console.log('error in addToaCard');
        }
    }
}

export default new ArticlePage();