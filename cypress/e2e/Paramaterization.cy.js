const studentList = require('../fixtures/example.json')
describe ("loading and accessing fixtures", ()=> {

    beforeEach("load fixture", function () {
        cy.visit(Cypress.env('url'))
        cy.get('#btnAccept').click({ force: true })
        cy.get('#menuContact').click()
    })
    studentList.forEach(student => {
    //describe("loading and accessing fixtures", ()=>{
        
        it("Paramaterization through fixtures", function()  {
        //it("should access the data from the fixture", function (){
            // cy.fixture('example.json').then(function(data){
            //     this.data=data;
            //     })
        //cy.pause
        //cy.fixture('example').then(function(data){
          //  this.data=data
        //cy.get('#menuContact').click()
        cy.get('#txtFirstName').type (student.firstName)
        cy.get('#txtLastName').type (student.lastName)
        cy.get('#txtEmail').type(student.Email)
        cy.get('#drpTimezone').select(student.TimeZone)
        cy.get('#txtShortDescription').type(student.Subject)
        cy.get('#txtFullDescription').type(student.Details)
        cy.get('#btnSubmitTcket').click()
        cy.wait(10000)
        cy.get('#btnsuccDone').click({ force: true })


    })
})})