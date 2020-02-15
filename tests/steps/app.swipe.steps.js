import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { tabBar } from '../screenobjects/components/tabBar';
import SwipeScreen from '../screenobjects/swipe.screen';

Given(/^I'm on the swipe screen$/, () => {
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

When(/^I swipe to the left$/, () => {
    SwipeScreen.carousel.swipeLeft();
});

When(/^I swipe to the right$/, () => {
    SwipeScreen.carousel.swipeRight();
});

Then(
    /^the app displays card with nthCard '(.+)' and text '(.+)'$/,
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

When(/^I'm click swipe screen button$/, () => {
    tabBar.openSwipe();
    SwipeScreen.waitForIsShown(true);
});
