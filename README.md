# WebdriverIO Appium Cucumber boilerplate 

Boilerplate project to run Appium tests together with WebdriverIO and BDD with cucumber for:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps

This project was based on [webdriverio/appium-boilerplate](https://github.com/webdriverio/appium-boilerplate/)

> This boilerplate uses the WebdriverIO native demo app which, the version of the app used in this boilerplate is in the apps folder, other versions can be found at this link [release](https://github.com/webdriverio/native-demo-app/releases).
> Before running tests, please replace the App in the `./apps` directory with your app.

## Requirements
- node >= 10.18.x - [how to install Node](https://nodejs.org/en/download/)
- yarn >= 1.21.x - [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)


## Installing Appium on a local machine
See [Installing Appium on a local machine](https://github.com/webdriverio/appium-boilerplate/blob/master/docs/APPIUM.md)

## Setting up Android and iOS on a local machine
To setup your local machine to use an Android emulator and an iOS simulator see [Setting up Android and iOS on a local machine](https://github.com/webdriverio/appium-boilerplate/blob/master/docs/ANDROID_IOS_SETUP.md)

## Getting Started
Install the dependencies:

```bash
$ yarn install
````
Start the appium server:
```bash
$ appium
```
>The `@wdio/appium-service` is integrated in this boilerplate so you don't need to start an Appium server yourself, WebdriverIO will do that for you.

## Config
This boilerplate uses a specific config for iOS and Android, see [configs](./config/) and are based on `wdio.shared.conf.js`.
This shared config holds all the defaults so the iOS and Android configs only need to hold the capabilities and steps that are needed for running on iOS and or Android.

Since we do not have Appium installed as part of this package, this has been configured to use the global Appium installation. This is configured in wdio.shared.conf.js
```
appium: {
    command : 'appium'
},
```

In this project the application remains open during the execution of one suite and another, if a new session is necessary or restart the application during execution, change these settings in the file

```
config.capabilities = [
{
    'appium:noReset': true,
    'appium:fullReset': false,
    'appium:dontStopAppOnReset': true,
}
```
To run the webview app tests you need chromedriver, it can be found [here](http://appium.io/docs/en/writing-running-appium/web/chromedriver/), after downloading, edit the file `wdio.android.app.conf.js` and add the path to the folder where the chromedriver

```
config.capabilities = [
{
    'appium:chromedriverExecutableDir': '<PATH TO CHROME DRIVER>',
}
```
## Spoken Languages
>In the directory `./tets/featuresAndStepsPortuguese/` there are features and steps with the keywords in Portuguese.

If you want to use another language in features files, you can see this [doc](https://cucumber.io/docs/gherkin/reference/#spoken-languages) about how can you do that.  

## To run tests:
```bash
// For Android
$ yarn android.app

// For iOS
$ yarn ios.app
```
## Reports
Run this command to generate the allure report in the directory `./test-report/allure-report`:

```bash
$ yarn report:generate
```

You can run this command to start a server on your machine and open the allure report on the browser:

```bash
$ yarn report:open
```
## Eslint and Prettier
Run check lint:

```bash
$ yarn code:check
```

Run format lint:

```bash
$ yarn code:format
```

## Locator strategy for native apps
The locator strategy for this boilerplate is to use `accessibilityID`'s, see also the [WebdriverIO docs](http://webdriver.io/guide/usage/selectors.html#Accessibility-ID) or this newsletter on [AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used and for example only XPATH is only available then the following setup could be used to make cross-platform selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```
The same applies when we have the same identifier in both applications, but the behavior is different, so we can apply cross-platform functions
```js
    if (driver.isIOS) {
        return expect(cardText).contain(expectedText);
    }
    return expectedText
        .split(' ')
        .forEach((word) => expect(cardText).contain(word));
    }, 
```
## Cloud vendors

### Sauce Labs Real Device Cloud
This boilerplate now also provides a setup for testing with the Real Device Cloud (RDC) of Sauce Labs. Please check the [SauceLabs](./config/saucelabs)-folder to see the setup for iOS and Android.

> With the latest version of WebdriverIO (`5.4.13` and higher) the iOS and Android config holds: 
> - automatic US or EU RDC cloud selection by providing a `region` in the config, see the [iOS](./config/saucelabs/wdio.ios.rdc.app.conf.js) and the [Android](./config/saucelabs/wdio.ios.rdc.app.conf.js) configs 
> - automatic update of the teststatus in the RDC cloud without using a customer script

Make sure you install the latest version of the `@wdio/sauce-service` with

```shell
$ npm install --save-dev @wdio/sauce-service
```

and add `services: ['sauce'],` to the config. If no `region` is provided it will automatically default to the US-RDC cloud.
If you provide `region: 'us'` or `region: 'eu'` it will connect to the US or the EU RDC cloud

There are 2 scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:

    // For iOS
    $ yarn ios.sauce.rdc.app
    
    // For Android
    $ yarn android.sauce.rdc.app
