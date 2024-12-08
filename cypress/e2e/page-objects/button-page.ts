class ButtonPage {
  elements = {
    buttonTitle: () =>
      cy.get(
        "body > app-root > app-buttons > app-pageheader > section > div > div > h1"
      ),
  };

  buttonTitleVisible(buttonTitle: string) {
    this.elements
      .buttonTitle()
      .should("be.visible")
      .and("have.text", buttonTitle);
  }
}

const buttonPage = new ButtonPage();

export default buttonPage;
