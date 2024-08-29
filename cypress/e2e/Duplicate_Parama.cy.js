describe ('Single Paramaterization', () => {
        it('Single Paramaterization test case', () => {
       
        cy.fixture('Duplicate').then ((variable)  => {
        //this.variable = variable
        cy.visit(Cypress.env('url'))
        cy.get('#menuContact').click()
        cy.get('#txtFirstName').type (variable.firstName)
        cy.get('#txtLastName').type (variable.lastName)
        cy.get('#txtEmail').type(variable.Email)
        cy.get('#drpTimezone').select(variable.TimeZone)
        cy.get('#txtShortDescription').type(variable.Subject)
        cy.get('#txtFullDescription').type(variable.Details)
        cy.get('#btnSubmitTcket').click()
        cy.wait(10000)
        cy.get('#btnsuccDone').click({ force: true })

        })
                
        }
)}
)