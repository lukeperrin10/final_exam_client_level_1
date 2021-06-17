describe('User is able to see landing page', () => {
  beforeEach(() => {
    cy.intercept( 'GET', 'https://content.viaplay.se/pc-se/serier/samtliga', {
      fixture: 'listOfTvShows.json',
    });

    cy.visit('/');
  });

  it('is expected to show landing page header with logo', () => {
    cy.get('[data-cy=landing-page-header]').within(() => {
      cy.get('[data-cy=logo]').should('be.visible');
    });
  });

  it('is expected to show a list of tv show images', () => {
    cy.get('[data-cy=tv-show-image]').should('contain', [0]);
  });
});
