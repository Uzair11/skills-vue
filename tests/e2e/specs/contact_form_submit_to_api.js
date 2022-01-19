describe('Contact form submit', () => {
  it('Visits contact us page, fills out the form and submits the data', () => {
    cy.visit('/contactus');

    cy.get('#emailInput').type('testemail@test.com');
    cy.get('#messasgeInput').type('test message sent from test email to a test user by a robot');
    cy.get('#submitButton').click();
    cy.get('#successInfo').should('be.visible');
  });
});
