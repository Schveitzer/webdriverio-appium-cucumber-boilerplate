class TabBar {
    openHome() {
        $('~Home').click();
    }

    openWebView() {
        $('~WebView').click();
    }

    openLogin() {
        $('~Login').click();
    }

    openForms() {
        $('~Forms').click();
    }

    openSwipe() {
        $('~Swipe').click();
    }

    waitForTabBarShown() {
        $('~Home').waitForDisplayed(20000);
    }
}

export const tabBar = new TabBar();
