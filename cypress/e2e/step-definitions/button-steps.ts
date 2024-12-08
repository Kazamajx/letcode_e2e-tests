import { Then } from "@badeball/cypress-cucumber-preprocessor";
import buttonPage from "../page-objects/button-page";
import { buttonTitleString } from "../strings/button-strings";

Then("User sees the Click title", () => {
  buttonPage.buttonTitleVisible(buttonTitleString);
});
