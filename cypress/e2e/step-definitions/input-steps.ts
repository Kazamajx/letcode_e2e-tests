import { Then } from "@badeball/cypress-cucumber-preprocessor";
import inputPage from "../page-objects/input-page";
import { inputString } from "../strings/input-strings";

Then("User sees the Input title", () => {
  inputPage.inputTitleVisible(inputString);
});

Then("User sees the Full Name textbox", () => {
  inputPage.inputFullNameTextboxVisible();
});

Then("User sees the Append textbox", () => {
  inputPage.inputAppendTextboxVisible();
});

Then("User sees the Inside textbox", () => {
  inputPage.inputInsideTextboxVisible();
});

Then("User sees the Clear textbox", () => {
  inputPage.inputClearTextboxVisible();
});

Then("User sees the Confirm textbox", () => {
  inputPage.inputConfirmTextboxVisible();
});

Then("User sees the Readonly textbox", () => {
  inputPage.inputReadonlyTextBoxVisible();
});
