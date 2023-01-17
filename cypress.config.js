const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 80000,
    defaultCommandTimeout: 80000,
    baseUrl: 'https://dev.keela.co/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
