//import Homepage_PageObject from "../Integration/PageObjects/Homepage_PageObject"
import Homepage_PageObject from "../Integration/PageObjects/Homepage_PageObject"
//import Login_Final from "./Login_Final"
//import Login_Final from "../PageObjects/Login_Final"
//import Login_Final from "..PageObjects/Login_Final"
import Login_Final from "../Integration/PageObjects/Login_Final"
describe('My First Test Suite', function () {
    beforeEach(() =>
    {   
       cy.login("username1","password1","tenancy1");
      }
    )

    it ('Geoworkz Login 1', () => {
        //cy.login('username1','password1','tenancy1')
    cy.log("first test case is passed")
    //     //cy.wait(15000)
    //cy.should('have.text'," ")
    })

    it ('Geoworkz Login 2', () => {
        //cy.login('username1','password1','tenancy1')
    cy.log("second test case is passed")
    //     //cy.wait(15000)
    //cy.should('have.text'," ")
    })

    it ('Geoworkz Login 3', () => {
        //cy.login('username1','password1','tenancy1')
    cy.log("third test case is passed")
    //     //cy.wait(15000)
    //cy.should('have.text'," ")
    })




})
    //cy.get('#errorText').should('have.text','Incorrect credentials. Please verify that the information you entered is correct, and try again.')
    // });
    // it ('Geoworkz Login2', () => {
    //     cy.log("second test case")
    //     //cy.get('#errorText').should('have.text','Incorrect credentials. Please verify that the information you entered is correct, and try again.')
    // });

    // it ('Geoworkz CheckoutPageFreelancerFreetrial', () => {
    // cy.visit(Cypress.env('url'))
    // //     //cy.visit(Cypress.config.baseUrl)
    // //     //cy.visit("https://www.geoworkz.com/#")
    // cy.get('#btnAccept').click({ force: true })
    //     cy.wait(10000)
    //cy.get('#btnFreelanceView').click()
    //     //cy.get('#errorText').should('have.text','Incorrect credentials. Please verify that the information you entered is correct, and try again.')
    // });


    // it ('Geoworkz CheckoutPageAgencyFreetrial', () => {
    //     cy.visit(Cypress.env('url'))
    //     //cy.visit('baseUrl')
    //     //cy.get('#btnAccept').click({ force: true })
    //     cy.wait(10000)
    //     cy.get('#btnAgencyView').click()
    //     //cy.get('#errorText').should('have.text','Incorrect credentials. Please verify that the information you entered is correct, and try again.')
    // });


// describe ("loading and accessing fixtures", ()=> {
//     //describe("loading and accessing fixtures", ()=>{
//         beforeEach("load fixture", function () {
//             cy.visit(Cypress.env('url'))
//             cy.get('#btnAccept').click({ force: true })
//         })
//         it.only("Paramaterization through fixtures", function()  {
//         //it("should access the data from the fixture", function (){
//             // cy.fixture('example.json').then(function(data){
//             //     this.data=data;
//             //     })
//         //cy.pause
//         //cy.fixture('example').then(function(data){
//             this.data=data
//         cy.get('#menuContact').click()
//         cy.get('#txtFirstName').type (this.data[0].firstName)
//         cy.get('#txtLastName').type (this.data[0].lastName)
//         cy.get('#txtEmail').type(this.data[0].Email)
//         cy.get('#drpTimezone').select(this.data[0].TimeZone)
//         cy.get('#txtShortDescription').type(this.data[0].Subject)
//         cy.get('#txtFullDescription').type(this.data[0].Details)
//         cy.get('#btnSubmitTcket').click()
//         cy.get('#btnsuccDone').click()


//     })
//         }
//     let data; //closure variable
// beforeEach(() => {
//     //let data;
// cy.fixture('example').then((fData) => {
// data = fData;
//     });
//   });
//    it.only ('Contact US', () => {
//     cy.fixture('example').then((fData) => {
//         data = fData;

//     cy.visit(Cypress.env('url'))
//     cy.get('#btnAccept').click({ force: true })
//     cy.get('#menuContact').click()
//     cy.get('#txtFirstName').type (data.firstName)
//     cy.get('#txtLastName').type (data.lastName)
//     cy.get('#txtEmail').type(data.Email)
//     cy.get('#drpTimezone').select(data.TimeZone)
//     cy.get('#txtShortDescription').type(data.Subject)
//     cy.get('#txtFullDescription').type(data.Details)
//     cy.get('#btnSubmitTcket').click()
//     cy.get('#btnsuccDone').click()
//    })
// })})
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*it('My FirstTest case', function () {
      //  cy.visit("https://www.geoworkz.com/#")
        //cy.get('#btnAccept').click({ force: true })
        const Homepage = new Homepage_PageObject()
        cy.get('#btnAccept').click({ force: true })
        Homepage.getLoginButton().click()
        cy.origin('https://appidentity.translationworkspace.com/', () => {
           const Login_Final = Cypress.require('./Login_Final');
           const logink =new Login_Final()
            logink.getUserNameText().type('username')
            logink.getPasswordText().type('password')
            logink.getTenancyText().type('tenancy')
            logink.getSubmitB().click()
        })
    })
    it('My Second TestCase case', function () {
        cy.visit("https://www.geoworkz.com/#")
        cy.get('#btnAccept').click({ force: true })
        const Homepage = new Homepage_PageObject()
        cy.get('#btnAccept').click({ force: true })
        Homepage.getLoginButton().click()
        cy.origin('https://appidentity.translationworkspace.com/', () => {
           const Login_Final = Cypress.require('./Login_Final');
           const logink =new Login_Final()
            logink.getUserNameText().type('username')
            logink.getPasswordText().type('password')
            logink.getTenancyText().type('tenancy')
            logink.getSubmitB().click()
        })
    })
    */
// 
//)