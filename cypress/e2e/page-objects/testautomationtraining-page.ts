class TestAutomationTrainingPage {
  elements = {
    editButton: () =>
      cy.get(
        ":nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item"
      ),
    clickButton: () =>
      cy.get(
        "body > app-root > app-test-site > section:nth-child(2) > div > div > div > div:nth-child(2) > app-menu > div > footer > a"
      ),
  };

  clickEditButton() {
    this.elements.editButton().click();
  }

  clickClickButton() {
    this.elements.clickButton().click();
  }
}

const testAutomationTrainingPage = new TestAutomationTrainingPage();

export default testAutomationTrainingPage;
