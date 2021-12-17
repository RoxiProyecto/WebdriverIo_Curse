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
         const nameProduct = await this.name.getText().toLowerCase();
         return await nameProduct;
      } catch (error) {
         console.log("error in articule");
      }

   }

    /**
    * Retorn  lista de los nombres de Articulos
    */

   async getArticulesListTitle() {
      const articulesList = [];
      articulesList.map((articles) =>
         articulesList.push(articles.getTitle().toLowerCase())
      );
      console.log(articulesList);
      return articulesList;
   }



}

export default new SearchPage();