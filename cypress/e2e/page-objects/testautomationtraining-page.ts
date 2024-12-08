class TestAutomationTrainingPage {
  elements = {
    editButton: () =>
      cy.get(
        ":nth-child(2) > .hero-body > div.container > .columns > :nth-child(1) > app-menu > .card > .card-footer > .card-footer-item"
      ),
  };

  clickEditButton() {
    this.elements.editButton().click();
  }
}

const testAutomationTrainingPage = new TestAutomationTrainingPage();

export default testAutomationTrainingPage;
