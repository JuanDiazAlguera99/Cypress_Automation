const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    video: false,
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/report/mochawesome-report",
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
