import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { context } from '../data/Context';
import LoginScreen from '../screenobjects/login.screen';
import * as appMessages from '../Constants/appMessages.constant';
import { tabBar } from '../screenobjects/components/tabBar';

Given(/^I'm on the login screen$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openLogin();
    LoginScreen.waitForIsShown(true);
});

When(
    /^I try to log in with credentials; email: '(.+)' and password: '(.+)'$/,
    (email, password) => {
        LoginScreen.login(email, password);
    },
);

Then(/^app displays a message that the credentials are invalid$/, () => {
    assert.equal(
        LoginScreen.errorMessage.getText().replace('×\n', ''),
        appMessages.INVALID_EMAIL_OR_PASSWORD,
    );
});

When(/^I log in with the user'(.+)'$/, (userType) => {
    const user = context.logins[userType];
    LoginScreen.login(user.email, user.password);
    LoginScreen.loginMessagemOk();
});

Then(/^app displays alert of successful login$/, () => {
    LoginScreen.alert.waitForIsShown(false);
});
