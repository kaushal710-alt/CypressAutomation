describe ('Hooks explaination', () => {

    before ('it runs before any test case execution is started', () => {
    cy.log('before block is executed')
    }
)
    after ('it runs after all test cases execution is completed', () => 
    {
    cy.log ('after block is executed')
    }
)
    beforeEach ('it runs before each test case execution is started', () => 
    {
    cy.log ('beforeEach is executed')
    }
)  
    afterEach ('it runs after each test case execution is completed', () => 
    {
    cy.log ('AfterEach block is executed')
    }
)
    it ('first test case' , () => {
    
    cy.log ('first test case is executed')
    }
)
    it ('second test case' , () => {
    cy.log ('second test case is executed')
    }
    )
}
)
