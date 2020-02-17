exports.config = {
    // ====================
    // Runner and framework
    // Configuration
    // ====================
    runner: 'local',
    framework: 'cucumber',
    sync: true,
    logLevel: 'trace',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    bail: 0,
    baseUrl: 'http://the-internet.herokuapp.com',
    waitforTimeout: 6000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    specs: ['tests/features/**/*.feature'],
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 100000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip',
    },

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        // For options see
        // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        // If you need a logs from appium server, make log equal true.
        log: false,
        args: {
            // For arguments see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
        },
        command: 'appium',
    },

    port: 4723,

    // ====================
    // Some hooks
    // ====================
    
    //This code is responsible for taking the screenshot in case of error and attaching it to the report
    afterStep(uri, feature, scenario) {
         if (scenario.error) {
             driver.takeScreenshot();
         }
     },
};
