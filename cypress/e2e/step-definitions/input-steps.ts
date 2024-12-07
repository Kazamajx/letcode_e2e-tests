import { Then } from "@badeball/cypress-cucumber-preprocessor";
import inputPage from "../page-objects/input-page";
import { inputString } from "../strings/input-strings";

Then("User sees the Input title", () => {
  inputPage.inputTitleVisible(inputString);
});
