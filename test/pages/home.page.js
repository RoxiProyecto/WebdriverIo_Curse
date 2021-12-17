import BasePage from "./base.page";

class HomeSearchPage extends BasePage {

    //selector 
    get searchFieldSel() {return 'input[placeholder=Search]'; }
    get articlesContainer() {return '.product-image-container';}
    articles(articulo) {return $(`=${articulo}`);} 
    get iconSearch() {return '.button-search';} 
    tabSelector(name) { return $(`.sf-with-ul=${name.toUpperCase()}`);}
   

    //methods
    async searchArticles(articles) {
        
        const searchField = await browser.$(this.searchFieldSel);
        const searchIcon = await browser.$(this.iconSearch);
        try {
            await super.cleanFieldAndSendText(searchField, articles);
            await searchIcon.click();
        } catch (error) {
            console.log('error en el search articles');
            throw (error);
        }

    }
  

    async selectTapName(menuName) {
        try {
            const menuSelected = await browser.$(this.tabSelector(menuName));
            await menuSelected.click();
        } catch (error) {
            console.log('error selecting the menu');
        }
    }
    
    async clickMoreInfArticle() {
        try {
            await super.sendClickProductInfo(this.btnInfoProduct);
        } catch (error) {
            console.log('error clickMoreInfProduct in homePage');
        }

    }
  

}
export default new HomeSearchPage();