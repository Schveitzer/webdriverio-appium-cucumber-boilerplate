import { Given, When, Then } from 'cucumber';
import { assert } from 'chai';
import { tabBar } from '../../screenobjects/components/tabBar';
import WebViewScreen from '../../screenobjects/webview.screen';
import { CONTEXT_REF } from '../../helpers/WebView';

Given(/^eu estou na tela de webview$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openWebView();
    WebViewScreen.waitForWebsiteLoaded();
});

When(/^eu troco o contexto para webview$/, () => {
    // To be able to use the site in the webview webdriver.io first needs
    // change the context from native to webview
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
});

When(/^eu troco o contexto para nativo$/, () => {
    /**
     * IMPORTANT!!
     *  Because the app is not closed and opened between the 2 tests
     *  (and thus is NOT starting in the default context which is native)
     *  the context is here set to native. This is bad practice,
     *  because you should never rely on the state of a different test,
     *  but here it is excepted ;-)
     */
    WebViewScreen.switchToContext(CONTEXT_REF.NATIVE);
});

When(/^eu clino em API para abrir o Api docs$/, () => {
    WebViewScreen.openApiDocs();
});

When(/^eu clico para abrir o menu do site$/, () => {
    WebViewScreen.openWebsiteMenu();
});

When(/^eu clico na opção do menu '(.+)'$/, (option) => {
    WebViewScreen.clickOnMenuOption(option);
});

When(/^eu clico no botão webview$/, () => {
    tabBar.openWebView();
    WebViewScreen.waitForWebsiteLoaded();
});

Then(/^a página com o titúlo '(.+)' é aberta$/, (text) => {
    const header = WebViewScreen.getHeaderPage();
    assert.equal(header.getText(), text);
});
