<<<<<<< HEAD
import urbanLadderOasisPage from '../support/PageObjectModel/NewArrivalsPage';
 
describe('Urban Ladder Bookshelves Filter Test', () => {
 
  it('Logs each Oasis sub-item with sequential numbering', () => {
    Cypress.on('uncaught:exception', () => false);
 
    urbanLadderOasisPage.visitHomePage();
    urbanLadderOasisPage.hoverNewArrivalsAndOasis();
    urbanLadderOasisPage.logOasisSubItems();
  });

 
 
=======
import urbanLadderPage from '../support/PageObjectModel/bookshelf';
 
describe('Urban Ladder Bookshelves Filter Test', () => {
  it('visit the Website and select “Bookshelves” in Storage Furniture', () => {
    Cypress.on('uncaught:exception', () => false);
 
    urbanLadderPage.visitHomePage();
    urbanLadderPage.closePopupIfPresent();
    urbanLadderPage.navigateToBookshelves();
  });
>>>>>>> 4b9ef39313b7669f06814421c9ce0a6408c71d8e
});