import HomeSearchPage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import allureReporter from '@wdio/allure-reporter'
import {expect as chaiExpect} from "chai";
import {assert as chaiAssert} from "chai";

describe('My wrong login app', () => {
    it('should login with invalid credentials, passw', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407@gmail.com';
        const passw = 'Rocio333';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.msgErrorPage()).to.be.true;
        chaiExpect(await LoginPage.getMsgErrorPage()).to.equal('There is 1 error\nAuthentication failed.');

    });

    it('should login with invalid credentials, user email', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407@gmail.comcom';
        const passw = 'Rocio';
       await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.msgErrorPage()).to.be.true;
        chaiExpect(await LoginPage.getMsgErrorPage()).to.equal('There is 1 error\nAuthentication failed.');

    });

    it('Restrictions of the login inputs, emial', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407gmail.comcom';
        const passw = 'Rocio';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.msgErrorPage()).to.be.true;
        chaiExpect(await LoginPage.getMsgErrorPage()).to.equal('There is 1 error\nInvalid email address.');

    });
    it('Restrictions of the login inputs, passw < 5', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407@gmail.com';
        const passw = 'Roc';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.msgErrorPage()).to.be.true;
        chaiExpect(await LoginPage.getMsgErrorPage()).to.equal('There is 1 error\nInvalid password.');

    });
    it('Restrictions of the login inputs, passw empty', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407@gmail.com';
        const passw = '';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.msgErrorPage()).to.be.true;
        chaiExpect(await LoginPage.getMsgErrorPage()).to.equal('There is 1 error\nPassword is required.');

    });
    it('Restrictions of the login inputs, email empty', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = '';
        const passw = 'Rocio';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.msgErrorPage()).to.be.true;
        chaiExpect(await LoginPage.getMsgErrorPage()).to.equal('There is 1 error\nAn email address required.');

    });
    
});
describe('My Login application succes', () => {
    it('should login with valid credentials', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407@gmail.com';
        const passw = 'Rocio';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        chaiExpect(await LoginPage.ensurePage()).to.be.true;
        chaiExpect(await LoginPage.getAccountName()).to.equal('R C');
        await LoginPage.logOut();
    });
     it('should logout and verify logout', async () => {
        allureReporter.addFeature('Login')
        allureReporter.addSeverity('Critical')
        const user = 'rcruzs8407@gmail.com';
        const passw = 'Rocio';
        await HomeSearchPage.open('/');
        await LoginPage.signIn();
        await LoginPage.login(user, passw);
        await LoginPage.logOut();
        chaiExpect(await LoginPage.ensureLogoutInPage()).to.be.false;
        await LoginPage.closeWindows();

    });
});