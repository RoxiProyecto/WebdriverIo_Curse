import BasePage from './base.page';

class SearchPage extends BasePage {

   //selector

   get articles() {
      return '.ajax_block_product>.product-container';
   }
   get name() {
      return $('.right-block>h5>.product-name');
   }

  // methods
   async clickArticle() {

      try {
         const articleItem = await browser.$(this.articles);
         await articleItem.click();
      } catch (error) {
         console.log('error in getArticle');
      }
   }

   async getNameArticle() {
      try {
         const nameProduct = await this.name.getText();
         return await nameProduct.toLowerCase();
      } catch (error) {
         console.log("error in articule");
      }

   }
    

}

export default new SearchPage();