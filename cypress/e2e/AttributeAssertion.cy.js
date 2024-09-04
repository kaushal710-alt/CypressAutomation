describe ('Hooks explaination', () => {
    it ('first test case' , () => {
    cy.visit(Cypress.env('url'))
    cy.get('#btnAccept').click({ force: true })
cy.get('#menuContact').should('have.attr','href','/Contact')
    }
)   
}
)
