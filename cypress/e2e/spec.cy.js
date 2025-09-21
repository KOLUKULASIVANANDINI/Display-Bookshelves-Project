import urbanLadderPage from '../support/PageObjectModel/bookshelf';
 
describe('Urban Ladder Bookshelves Filter Test', () => {
  it('visit the Website and select “Bookshelves” in Storage Furniture', () => {
    Cypress.on('uncaught:exception', () => false);
 
    urbanLadderPage.visitHomePage();
    urbanLadderPage.closePopupIfPresent();
    urbanLadderPage.navigateToBookshelves();
  });
});