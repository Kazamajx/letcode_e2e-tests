import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import buttonPage from "../page-objects/button-page";

import {
  buttonTitleString,
  buttonHomeString,
  buttonLocationString,
  buttonColorString,
  buttonTallAndFatString,
  buttonDisabledString,
  buttonHoldString,
} from "../strings/button-strings";

Then("User sees the Click title", () => {
  buttonPage.buttonTitleVisible(buttonTitleString);
});

Then("User sees the Home button", () => {
  buttonPage.buttonHomeVisible(buttonHomeString);
});

Then("User sees the Location button", () => {
  buttonPage.buttonLocationVisible(buttonLocationString);
});

Then("User sees the Color button", () => {
  buttonPage.buttonColorVisible(buttonColorString);
});

Then("User sees the Tall and fat button", () => {
  buttonPage.buttonTallAndFatVisible(buttonTallAndFatString);
});

Then("User sees the Disabled button", () => {
  buttonPage.buttonDisabledVisible(buttonDisabledString);
});

Then("User sees the Hold button", () => {
  buttonPage.buttonHoldVisible(buttonHoldString);
});

When("User clicks on the Home button", () => {
  buttonPage.clickHomeButton();
});

Then("User see the correct coordinates for the Location button", () => {
  buttonPage.buttonLocationCorrectCoordinates();
});

Then("User see the correct color on the Color button", () => {
  buttonPage.buttonColorCorrectColor();
});
