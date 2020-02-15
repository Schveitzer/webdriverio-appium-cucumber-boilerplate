import { Given, Then, When } from 'cucumber';
import { assert, expect } from 'chai';
import FormScreen from '../../screenobjects/forms.screen';
import { tabBar } from '../../screenobjects/components/tabBar';
import Gestures from '../../helpers/Gestures';
import LoginScreen from '../../screenobjects/login.screen';
import * as appMessages from '../../Constants/appMessages.constant';
import NativeAlert from '../../helpers/NativeAlert';

Given(/^eu estou na tela de forms$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openForms();
    FormScreen.waitForIsShown(true);
});

When(/^Eu digito o texto '(.+)' na caixa de texto$/, (text) => {
    FormScreen.input.setValue(text);
});

Then(/^é exibido o texto que foi digitado$/, () => {
    assert.equal(
        FormScreen.inputTextResult.getText(),
        'Text for the type test',
    );

    /**
     * IMPORTANT!!
     *  Because the app is not closed and opened between the tests
     *  (and thus is NOT starting with the keyboard hidden)
     *  the keyboard is closed here if it is still visible.
     */
    if (driver.isKeyboardShown()) {
        driver.hideKeyboard();
    }
});

When(/^o botão de switch está desabilitado$/, () => {
    expect(FormScreen.isSwitchActive()).to.equal(false);
});

When(/^eu clico no botão swtich$/, () => {
    FormScreen.switch.click();
});

Then(/^o botão switch fica habilitado$/, () => {
    expect(FormScreen.isSwitchActive()).to.equal(true);
});

When(/^Eu seleciono a opção '(.+)' da lista$/, (option) => {
    FormScreen.dropDown.click();
    FormScreen.picker.selectValue(option);
});

Then(/^é exibido o texto '(.+)'$/, (text) => {
    assert.equal(FormScreen.getDropDownText(), text);
});

When(/^eu clico no botão Inactive$/, () => {
    Gestures.checkIfDisplayedWithScrollDown(FormScreen.inActiveButton, 2);
    FormScreen.alert.waitForIsShown(false);
    FormScreen.inActiveButton.click();
});

When(/^eu clico no botão Activate$/, () => {
    Gestures.checkIfDisplayedWithScrollDown(FormScreen.activeButton, 2);
    FormScreen.activeButton.click();
    FormScreen.alert.waitForIsShown(true);
});

Then(/^o app exibe o alerta de ativação$/, () => {
    assert.equal(LoginScreen.alert.text(), appMessages.ACTIVE_BUTTON_TEXT);
});

When(/^eu clico na opção '(.+)'$/, (option) => {
    FormScreen.alert.pressButton(option);
});

Then(/^o app esconde o alerta de ativação$/, () => {
    expect(NativeAlert.alert().isDisplayed()).to.be.false;
});

Then(/o botão não faz nada$/, () => {
    // In this case the button can't be asked if it is active or not with
    // `expect(FormScreen.inActiveButton.isEnabled()).toEqual(false);`
    // So use a click and check if shown, make sure the alert is not there
    expect(NativeAlert.alert().isDisplayed()).to.be.false;
});
