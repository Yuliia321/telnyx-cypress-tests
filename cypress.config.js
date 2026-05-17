const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://telnyx.com",
      projectId: '29mik8',  
    
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
