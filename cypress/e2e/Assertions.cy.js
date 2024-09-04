describe ('Hooks explaination', () => {
    it ('first test case' , () => {
    Cypress.config('defaultCommandTimeout', 6000) 
    cy.visit(Cypress.env('url'))
    cy.get('#btnAccept').click({ force: true })
    cy.get('#menuProduct').trigger('mouseover');
cy.get('#menuOurPlan').should('be.visible');
cy.get('#menuOurPlan').first().click();
    }
)   
}
)
