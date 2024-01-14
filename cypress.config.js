const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://petstore.swagger.io/v2',
        specPattern: "cypress/support/e2e",
        supportFile: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            username: "Fatima123",
            password: "Pass123"
        }
    },
    reporter: "mochawesome",
    reporterOptions: {
        reportDir: "cypress/report/mochawesome-report",
        charts: true,
        overwrite: false,
        html: false,
        json: true
    }
});
