import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

import shared from "../page-objects/shared";

Given("User visits the LetCode website", () => {
  shared.visitTestAutomationTrainingPage();
});

Then("User sees {string} title in the tab", (title: string) => {
  shared.assertTitle(title);
});

Given("User visits the {string} url", (url: string) => {
  shared.visitTestAutomationTrainingUrl(url);
});
