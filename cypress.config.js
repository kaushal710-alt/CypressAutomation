//const { default: preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { defineConfig } = require("cypress");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

//async function setupNodeEvents(on, config) {
// implement node event listeners here
// await preprocessor.addCucumberPreprocessorPlugin(on,config);
// on("file: preprocessor", browserify.default(config));
//this.screenshotOnRunFailure= true;
//require('cypress-mochawesome-reporter/plugin')(on);
//};
module.exports = defineConfig({
  //reporter: 'cypress-mochawesome-reporter',

  env:
  {
url : "https://www.geoworkz.com/"
  },
  e2e: {
    //setupNodeEvents{
    setupNodeEvents(on, config) {
      //specPattern:'cypress/Integration/PageObjects/BDD/*.feature',
      specPattern: 'cypress/Integration/PageObjects/*.cy.js'

      baseUrl: 'https://www.geoworkz.com/#' 
    },
    experimentalOriginDependencies: true,
    //Cypress.config('experimentalSessionAndOrigin', true)
    

  },
  experimentalSessionAndOrigin: true

});

// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {},
// })

