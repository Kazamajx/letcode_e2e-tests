class InputPage {
  elements = {
    inputTitle: () =>
      cy.get(
        "body > app-root > app-input > app-pageheader > section > div > div > h1"
      ),
  };

  inputTitleVisible(inputTitle: string) {
    this.elements
      .inputTitle()
      .should("be.visible")
      .and("have.text", inputTitle);
  }
}

const inputPage = new InputPage();

export default inputPage;
