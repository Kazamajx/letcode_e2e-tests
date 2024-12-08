class InputPage {
  elements = {
    inputTitle: () =>
      cy.get(
        "body > app-root > app-input > app-pageheader > section > div > div > h1"
      ),
    inputFullNameTextbox: () => cy.get("#fullName"),
    inputAppendTextbox: () => cy.get("#join"),
    inputInsideTextbox: () => cy.get("#getMe"),
    inputClearTextbox: () => cy.get("#clearMe"),
    inputConfirmTextbox: () => cy.get("#noEdit"),
    inputReadonlyTextbox: () => cy.get("#dontwrite"),
  };

  inputTitleVisible(inputTitle: string) {
    this.elements
      .inputTitle()
      .should("be.visible")
      .and("have.text", inputTitle);
  }

  inputFullNameTextboxVisible() {
    this.elements.inputFullNameTextbox().should("be.visible");
  }

  inputAppendTextboxVisible() {
    this.elements.inputAppendTextbox().should("be.visible");
  }

  inputInsideTextboxVisible() {
    this.elements.inputInsideTextbox().should("be.visible");
  }

  inputClearTextboxVisible() {
    this.elements.inputClearTextbox().should("be.visible");
  }

  inputConfirmTextboxVisible() {
    this.elements.inputConfirmTextbox().should("be.visible");
  }

  inputReadonlyTextBoxVisible() {
    this.elements.inputReadonlyTextbox().should("be.visible");
  }

  typeFullName(fullName: string) {
    this.elements.inputFullNameTextbox().type(fullName);
  }

  showFullName(fullName: string) {
    this.elements.inputFullNameTextbox().should("have.value", fullName);
  }

  typeStringAppended(stringAppended: string) {
    this.elements.inputAppendTextbox().type(stringAppended);
  }

  showStringAppended(initialString: string, stringAppended: string) {
    this.elements
      .inputAppendTextbox()
      .should("have.value", initialString + stringAppended);
  }

  showInside(initialString: string) {
    this.elements.inputInsideTextbox().should("have.value", initialString);
  }

  deleteStringClearTextbox() {
    this.elements.inputClearTextbox().clear();
  }

  showEmpty() {
    this.elements.inputClearTextbox().should("have.value", "");
  }

  showDisabled() {
    this.elements.inputConfirmTextbox().should("have.attr", "disabled");
  }

  showReadonly() {
    this.elements.inputReadonlyTextbox().should("have.attr", "readonly");
  }

  showTextReadonly(initialString: string) {
    this.elements.inputReadonlyTextbox().should("have.value", initialString);
  }
}

const inputPage = new InputPage();

export default inputPage;
