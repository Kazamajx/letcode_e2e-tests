import { When } from "@badeball/cypress-cucumber-preprocessor";

import testAutomationTrainingPage from "../page-objects/testautomationtraining-page";

When("User clicks on the Edit button", () => {
  testAutomationTrainingPage.clickEditButton();
});

When("User clicks on the Click button", () => {
  testAutomationTrainingPage.clickClickButton();
});
