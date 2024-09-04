describe ('GrabTextAndExpectChaiAssertion', () => {
    it ('first test case' , () => {
    //Cypress.config('defaultCommandTimeout', 6000) 
    cy.visit(Cypress.env('url'))
    cy.get('#btnAccept').click({ force: true })
    cy.get('#menuContact').click()
    cy.get('#ContactForm > :nth-child(2) > p').then(function(grabText)
    {
const ActualText = grabText.text()
expect(ActualText.includes('suggestions1')).to.be.true
    }
)
    }
)   
}
)
