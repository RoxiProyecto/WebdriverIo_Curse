import HomeSearchPage from "../pages/home.page";
import allureReporter from '@wdio/allure-reporter'



describe('My images of my application', () => {
it('Header-container image comparison', async () => {
    allureReporter.addFeature('Visual Regresion Header container')
    allureReporter.addSeverity('Medium')
    await HomeSearchPage.open('/');
    await $(".nav>.container").waitForDisplayed();
   expect(
       await browser.checkElement(await $(".nav>.container"), "header-container", {
           /* opciones de configuración para el elemento */
       }),
       "Error: the application's navigation bar does not match the origina"
   ).equal(0);

   });
});
