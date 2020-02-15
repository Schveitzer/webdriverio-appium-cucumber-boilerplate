import { Given, When, Then } from 'cucumber';
import { assert } from 'chai';
import { tabBar } from '../screenobjects/components/tabBar';
import WebViewScreen from '../screenobjects/webview.screen';
import { CONTEXT_REF } from '../helpers/WebView';

Given(/^I'm on the webview screen$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openWebView();
    WebViewScreen.waitForWebsiteLoaded();
});

When(/^I change the context to webview$/, () => {
    // To be able to use the site in the webview webdriver.io first needs
    // change the context from native to webview
    WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);
});

When(/^I change the context to native$/, () => {
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

When(/^I click on API to open Api Docs$/, () => {
    WebViewScreen.openApiDocs();
});

When(/^I click to open site menu$/, () => {
    WebViewScreen.openWebsiteMenu();
});

When(/^I click to open '(.+)' option in menu$/, (option) => {
    WebViewScreen.clickOnMenuOption(option);
});

When(/^I'm click Webview screen button$/, () => {
    tabBar.openWebView();
    WebViewScreen.waitForWebsiteLoaded();
});

Then(/^the page with the title '(.+)' is opened$/, (text) => {
    const header = WebViewScreen.getHeaderPage();
    assert.equal(header.getText(), text);
});
