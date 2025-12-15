describe('Teste básico', () => {
  it('Visita uma página', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('Kitchen Sink');
  });
});
