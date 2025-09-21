class UrbanLadderPage {
  visitHomePage() {
    cy.visit('https://www.urbanladder.com/');
    cy.viewport(1280, 800);
    cy.wait(5000);
  }
  closePopupIfPresent() {
    cy.get('body').then($body => {
      if ($body.find('.close-reveal-modal').length) {
        cy.get('.close-reveal-modal').click();
      }
    });
  }
  navigateToBookshelves() {
    cy.contains('Storage Furniture').click({ force: true });
    cy.contains('Bookshelves').click({ force: true });
    cy.wait(3000);
  }
}
export default new UrbanLadderPage();