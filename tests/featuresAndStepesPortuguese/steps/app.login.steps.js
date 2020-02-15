import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { context } from '../../data/Context';
import LoginScreen from '../../screenobjects/login.screen';
import * as appMessages from '../../Constants/appMessages.constant';
import { tabBar } from '../../screenobjects/components/tabBar';

Given(/^eu estou na tela de login$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openLogin();
    LoginScreen.waitForIsShown(true);
});

When(
    /^eu tento fazer login com as credencias; email: '(.+)' e senha: '(.+)'$/,
    (email, password) => {
        LoginScreen.login(email, password);
    },
);

Then(
    /^o app exibe mensagem informando que as credenciais são inválidas$/,
    () => {
        assert.equal(
            LoginScreen.errorMessage.getText().replace('×\n', ''),
            appMessages.INVALID_EMAIL_OR_PASSWORD,
        );
    },
);

When(/^eu faço o login como o usuário '(.+)'$/, (userType) => {
    const user = context.logins[userType];
    LoginScreen.login(user.email, user.password);
    LoginScreen.loginMessagemOk();
});

Then(/^o app exibe alerta de login efetuado com sucesso$/, () => {
    LoginScreen.alert.waitForIsShown(false);
});
