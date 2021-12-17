import HomeSearchPage from "../pages/home.page";
import SearchPage from "../pages/search.page";
import ArticlePage from "../pages/article.page";
import DATOS from '../data/articulos';
import allureReporter from '@wdio/allure-reporter'
import { expect as chaiExpect} from "chai";


describe('Opencart_search articules', () => {
    DATOS.forEach(({ articulo }) => {
        it(`Debería buscar ${articulo}`, async () => {
            allureReporter.addFeature('Customer Search Management')
            allureReporter.addSeverity('critical')
            await HomeSearchPage.open('/');
            await HomeSearchPage.searchArticles(articulo);
           
            chaiExpect(await SearchPage.getNameArticle()).to.include(articulo.toLowerCase());

        });
    });

});