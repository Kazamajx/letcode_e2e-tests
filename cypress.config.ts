const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on: any, config: any) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: "**/*.feature",
    baseUrl: "https://letcode.in",
  },
  viewportWidth: 3840,
  viewportHeight: 2160,
  reporter: "junit",
  reporterOptions: {
    useFullSuiteTitle: true,
    testsuitesTitle: true,
    mochaFile: "cypress/results/[hash].xml",
    toConsole: false,
    attachments: true,
  },
});
