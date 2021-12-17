import BasePage from './base.page';

class SearchPage extends BasePage {

   //Elementos Web

   get articles() {
      return '.ajax_block_product>.product-container';
   }
   get name() {
      return $('.right-block>h5>.product-name');
   }

   /**
    * Click en el resultado de la búsqueda
    */
   async clickArticle() {

      try {
         const articleItem = await browser.$(this.articles);
         await articleItem.click();
      } catch (error) {
         console.log('error in getArticle');
      }
   }

   /**
    * Obtener texto del resultado de la búsqueda
    */

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