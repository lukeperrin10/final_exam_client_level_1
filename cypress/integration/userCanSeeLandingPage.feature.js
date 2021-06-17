describe('User is able to see landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  
  it('is expected to show a message', () => {
    cy.get('[data-cy=message]').should('contain', 'hello world');
  });
})
