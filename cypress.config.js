const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-testrail-reporter',
    cypressTestrailReporterReporterOptions: {
      host: 'https://iconic.testrail.com',
      username: 'qa@helloiconic.com',
      password: 'kGlFpjZegOY.0yakcPfA-rt2ygh9mwUTQUwaDte1X',
      runName: 'Regression testing',
      projectId: 62,
      suiteId: 1021,
      toConsole: false
    }
  },

  //projectId: 'rsq76t',
  
  // e2e: {
  //   baseUrl: 'https://cms-fastcash-staging.nexoutlets.com/',
  //   watchForFileChanges: false,
  //   viewportHeight: 900,
  //   viewportWidth: 1400,
  //   setupNodeEvents(on, config) {
  //     // implement node event listeners here
  //   }
  // },
  // video: false

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/BDD/*.feature',
    "chromeWebSecurity": false
  },
  

});


