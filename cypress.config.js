import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import * as preprocessor from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild.js";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on("file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      await preprocessor.default.addCucumberPreprocessorPlugin(on, config); // <-- Access `.default`
      return config;
    },
    specPattern: "cypress/e2e/features/**/*.feature"
  },
});
