import HomeSearchPage from "../pages/home.page";
import allureReporter from '@wdio/allure-reporter'



describe('My images of my application', () => {
it('Comparación de imágenes del header-container', async () => {
    allureReporter.addFeature('Visual Regresion Header container')
    allureReporter.addSeverity('Medium')
    await HomeSearchPage.open('/');
    await $(".nav>.container").waitForDisplayed();
   expect(
       await browser.checkElement(await $(".nav>.container"), "header-container", {
           /* opciones de configuración para el elemento */
       }),
       "Error: la barra de navegación de WebdriverIO no coincide con la original"
   ).equal(0);

   });
});
