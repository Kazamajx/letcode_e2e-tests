class Shared {
  /**
   * For the elements use:
   * elements = {
   *      get button() {
   *          return cy.get("<selector>");
   *      }
   * }
   */

  visitTestAutomationTrainingPage() {
    cy.visit("/test");
  }

  assertTitle(title: string) {
    cy.title().should("eq", title);
  }

  visitTestAutomationTrainingUrl(url: string) {
    cy.visit(url);
  }
}

const shared = new Shared();

export default shared;
