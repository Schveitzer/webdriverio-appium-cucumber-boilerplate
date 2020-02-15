import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { tabBar } from '../../screenobjects/components/tabBar';
import SwipeScreen from '../../screenobjects/swipe.screen';

Given(/^eu estou na tela de swipe$/, () => {
    tabBar.waitForTabBarShown(true);
    tabBar.openSwipe();
    SwipeScreen.waitForIsShown(true);
});

When(/^I'm on the first carousel item$/, () => {
    SwipeScreen.carousel.verifyNthCardContainsText(
        'first',
        'Fully Open Source',
    );
});

When(/^eu deslizo para a esquerda$/, () => {
    SwipeScreen.carousel.swipeLeft();
});

When(/^eu deslizo para a direita$/, () => {
    SwipeScreen.carousel.swipeRight();
});

Then(
    /^o app exibe o card com o nthCard '(.+)' e o texto '(.+)'$/,
    (nthCard, Text) => {
        const expectedText = Text.toLowerCase();
        const cardText = SwipeScreen.carousel.getCardText(nthCard);

        if (driver.isIOS) {
            return expect(cardText).contain(expectedText);
        }
        /**
         * Needed to implement this for Android because the `flex:wrap` returns an incorrect order
         * of the text so we need to split words and verify then
         */
        return expectedText
            .split(' ')
            .forEach((word) => expect(cardText).contain(word));
    },
);

When(/^eu clico no botão para abrir a tela de swipe$/, () => {
    tabBar.openSwipe();
    SwipeScreen.waitForIsShown(true);
});
