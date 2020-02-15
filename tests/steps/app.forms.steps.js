import { Given, Then, When } from 'cucumber';
import { assert, expect } from 'chai';
import FormScreen from '../screenobjects/forms.screen';
import { tabBar } from '../screenobjects/components/tabBar';
import Gestures from '../helpers/Gestures';
import LoginScreen from '../screenobjects/login.screen';
import * as appMessages from '../Constants/appMessages.constant';
import NativeAlert from '../helpers/NativeAlert';

Given(/^I'm on the forms screen$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openForms();
    FormScreen.waitForIsShown(true);
});

When(/^I type '(.+)' in the text box$/, (text) => {
    FormScreen.input.setValue(text);
});

Then(/^the text that was typed is displayed$/, () => {
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

When(/^the switch button is in the disabled state$/, () => {
    expect(FormScreen.isSwitchActive()).to.equal(false);
});

When(/^I click on the switch button$/, () => {
    FormScreen.switch.click();
});

Then(/^the switch button is in the activated state$/, () => {
    expect(FormScreen.isSwitchActive()).to.equal(true);
});

When(/^I select the '(.+)' option from the list$/, (option) => {
    FormScreen.dropDown.click();
    FormScreen.picker.selectValue(option);
});

Then(/^the text '(.+)'is displayed$/, (text) => {
    assert.equal(FormScreen.getDropDownText(), text);
});

When(/^I click the Inactive button$/, () => {
    Gestures.checkIfDisplayedWithScrollDown(FormScreen.inActiveButton, 2);
    FormScreen.alert.waitForIsShown(false);
    FormScreen.inActiveButton.click();
});

When(/^I click the activate button$/, () => {
    Gestures.checkIfDisplayedWithScrollDown(FormScreen.activeButton, 2);
    FormScreen.activeButton.click();
    FormScreen.alert.waitForIsShown(true);
});

Then(/^the app displays the activated alert$/, () => {
    assert.equal(LoginScreen.alert.text(), appMessages.ACTIVE_BUTTON_TEXT);
});

When(/^I click on the option '(.+)'$/, (option) => {
    FormScreen.alert.pressButton(option);
});

Then(/^the app hide the activated alert$/, () => {
    expect(NativeAlert.alert().isDisplayed()).to.be.false;
});

Then(/the button does nothing$/, () => {
    // In this case the button can't be asked if it is active or not with
    // `expect(FormScreen.inActiveButton.isEnabled()).toEqual(false);`
    // So use a click and check if shown, make sure the alert is not there
    expect(NativeAlert.alert().isDisplayed()).to.be.false;
});
