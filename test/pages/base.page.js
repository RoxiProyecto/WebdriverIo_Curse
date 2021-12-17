const PAGE_TIMEOUT = 10000;

export default class BasePage {
      
    async open(ruta) {
        await browser.url(`${ruta}`);
    }
 
    async clickElement(elemento) {
        try {
            await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
            await elemento.click();
        } catch (error) {
            console.log('error in clickElement')
        }
       
    }
 
   //espera x elemento, limpia  del input  y luego escribe
    async cleanFieldAndSendText(elemento, texto){
        try {
            await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
            await elemento.clearValue();
            await elemento.click();
            await elemento.keys(texto); 
        } catch (error) {
            console.log(' error in cleanFieldAndSendText');
        }
        
    }
   
   async closeWindows(){
       try {
        await browser.closeWindow();
       } catch (error) {
           console.log("error to closeWindows")
       }
   }

}
