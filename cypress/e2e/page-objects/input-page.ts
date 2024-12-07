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
    this.elements.inputFullNameTextbox().should("be.visible");
  }

  inputReadonlyTextBoxVisible() {
    this.elements.inputFullNameTextbox().should("be.visible");
  }
}

const inputPage = new InputPage();

export default inputPage;