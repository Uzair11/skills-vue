describe('Contact form submit', () => {
  it('Visits contact us page, fills out the form and submits the data', () => {
    cy.visit('/contactus');
    cy.get('#emailInput').type('testemail@test.com'); //fills data in email input
    cy.get('#messasgeInput').type('test message sent from test email'); //fills data in message
    cy.get('#submitButton').click();
    cy.get('#successInfo').should('be.visible'); //test passes if successInfo element is visible
  });
});
