import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    runner: 'local',
    specs: ['./src/features/**/*.feature'],
    maxInstances: 1,

    // @ts-ignore
    capabilities: [{
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['--disable-notifications']
        }
    }],

    logLevel: 'info',
    baseUrl: 'https://www.flipkart.com',
    waitforTimeout: 10000,

    framework: 'cucumber',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false
        }]
    ],

    cucumberOpts: {
        require: ['./src/step-definitions/**/*.ts'],
        timeout: 60000
    },

    autoCompileOpts: {
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'
        }
    },

    afterStep: async function (_test, _context, { error }) {
        if (error) {
            await browser.takeScreenshot()
        }
    }
}
