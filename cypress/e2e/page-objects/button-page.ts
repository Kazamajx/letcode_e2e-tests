class ButtonPage {
  elements = {
    buttonTitle: () =>
      cy.get(
        "body > app-root > app-buttons > app-pageheader > section > div > div > h1"
      ),
    buttonHomeButton: () => cy.get("#home"),
    buttonLocationButton: () => cy.get("#position"),
    buttonColorButton: () => cy.get("#color"),
    buttonTallAndFatButton: () => cy.get("#property"),
    buttonDisabledButton: () =>
      cy.get(":nth-child(5) > .control > #isDisabled"),
    buttonHoldButton: () => cy.get(":nth-child(6) > .control > #isDisabled"),
  };

  buttonTitleVisible(buttonTitle: string) {
    this.elements
      .buttonTitle()
      .should("be.visible")
      .and("have.text", buttonTitle);
  }

  buttonHomeVisible(homeText: string) {
    this.elements
      .buttonHomeButton()
      .should("be.visible")
      .and("have.text", homeText);
  }

  buttonLocationVisible(locationText: string) {
    this.elements
      .buttonLocationButton()
      .should("be.visible")
      .and("have.text", locationText);
  }

  buttonColorVisible(colorText: string) {
    this.elements
      .buttonColorButton()
      .should("be.visible")
      .and("have.text", colorText);
  }

  buttonTallAndFatVisible(tallAndFatText: string) {
    this.elements
      .buttonTallAndFatButton()
      .should("be.visible")
      .and("have.text", tallAndFatText);
  }

  buttonDisabledVisible(disabledText: string) {
    this.elements
      .buttonDisabledButton()
      .should("be.visible")
      .and("have.text", disabledText);
  }

  buttonHoldVisible(holdText: string) {
    this.elements
      .buttonHoldButton()
      .should("be.visible")
      .and("have.text", holdText);
  }

  clickHomeButton() {
    this.elements.buttonHomeButton().click();
  }

  buttonColorCorrectColor() {
    this.elements
      .buttonColorButton()
      .should("have.css", "color", "rgb(255, 255, 255)")
      .and("have.css", "background-color", "rgb(138, 77, 118)");
  }
}

const buttonPage = new ButtonPage();

export default buttonPage;
