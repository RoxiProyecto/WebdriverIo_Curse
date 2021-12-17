import BasePage from "./base.page";

class LoginPage extends BasePage {

    //selectores
    get inputUsername() {return '#email';}
    get inputPassword() {return '#passwd';}
    get inputEmail() {return '#email_create';}
    get btnSubmitLogin() {return '#SubmitLogin';}
    get btnSubmitCreate() {return 'button[id="SubmitCreate"]';}
    get msgPage() {return $('#center_column>.alert-danger')}
    get logo() {return '#header_logo';}
    get singIn() {return '.login';}
    get logOut() {return '.logout';}
    get account() {return $('.account');} 

    // metodos
    async login(username, password) {
        try {
        const userField = await browser.$(this.inputUsername);
        const passwordField = await browser.$(this.inputPassword);
        
        const btnConfirmLogin= await browser.$(this.btnSubmitLogin);

        await super.cleanFieldAndSendText(userField, username);
        await super.cleanFieldAndSendText(passwordField, password);
        await btnConfirmLogin.click();

        } catch (error) {
            console.log('error Singin');
        }
    }

    async signIn() {
        try {
            const btnSigIn = await browser.$(this.singIn);
            await btnSigIn.click();
        } catch (error) {
            console.log('error selected in singin');
        }
    }
    async msgErrorPage() {
        try {
            const msgInPage = await this.msgPage;
            return await msgInPage.isDisplayed();
        } catch (error) {
            console.log('error in ensure the Page');
        }
    }
    async getMsgErrorPage() {
        try {
            const msgInPage = await this.msgPage.getText();
            return  msgInPage;
        } catch (error) {
            console.log('error in ensure the Page');
        }
    }
    async ensurePage() {
        try {
           
            const logoPage =await browser.$(this.logo);
            return await logoPage.isDisplayed();
        } catch (error) {
            console.log('error in ensure the Page');
        }
    }

    async logOut() {
        try {
            const btnlogout = await browser.$(this.logOut);
            await btnlogout.click();
        } catch (error) {
            console.log('error selected in logout');
        }
    }

    //expect false
    async ensureLogoutInPage() {
        try {
            const loginInPage = browser.$(this.singIn);
            return await loginInPage.isDisplayed();
        } catch (error) {
            console.log('error in ensure the Page');
        }
    }
    async getAccountName() {
        try {

          const nameAccount=await this.account.getText();
          return nameAccount;

        } catch (error) {
           console.log("error in articule")
        }
      
    }
}
export default new LoginPage();