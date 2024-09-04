// // ***********************************************
// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
import './commands'
require('cypress-xpath');
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
Cypress.Commands.add("urlfunction", (urlCentral) => {

//this.urlCentral = urlCentral

cy.visit(urlCentral)
cy.get('#btnAccept').click({ force: true })

})
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cyypresspress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// import Homepage_PageObject from "../Integration/PageObjects/Homepage_PageObject"
// //import Login_Final from "../Integration/PageObjects/Login_Final"
// //import Login_Final from "..PageObjects/Login_Final"
// import Login_Final from "../e2e/Login_Final"
// //import Login_Final from "../e2e/Login_Final"
// // Cypress.Commands.add("login",(username,password,tenancy)=> {
// //  {
// //     cy.session([username,password,tenancy], ()=> {
// //         cy.visit("https://www.geoworkz.com/#")
// //         cy.get('#btnAccept').click({ force: true })
// //         const Homepage = new Homepage_PageObject()
// //         cy.get('#btnAccept').click({ force: true })
// //         Homepage.getLoginButton().click()
// //         cy.wait(15000)
// //         cy.origin('https://appidentity.translationworkspace.com/', () => {
// //         const Login_Final = Cypress.require('./Login_Final');
// //         //const Login_Final = Cypress.require('./e2e/Login_Final');
// //         //const Login_Final = Cypress.require("../integration/PageObject/Login_Final");
// //         const logink =new Login_Final()
// //         logink.getUserNameText().type(username)
// //             logink.getPasswordText().type(password)
// //             logink.getTenancyText().type(tenancy)
// //             logink.getSubmitB().click()
// //             //cy.wait (10000)
            
// //         })
// //         }
// // )}}
// // )
// Cypress.Commands.add("login", (username,password,tenancy) => {
// //this.username = username
// cy.session([username,password,tenancy], ()=> {
//    // this.username = username
//     cy.visit(Cypress.env('url'))
//     cy.get('#btnAccept').click({ force: true })
//     cy.get('#menuLogin').click()
//     //cy.origin('https://appidentity.translationworkspace.com/',{args: ({username})}() => {

//         cy.origin("https://appidentity.translationworkspace.com/", 
//             { args: { username,password,tenancy } }, 
//             ({ username,password,tenancy }) => {       
//         //const Login_Final = Cypress.require("../e2e/Login_Final");
//    const logink =new Login_Final()
//        logink.getUserNameText().type(username)
//        logink.getPasswordText().type(password)
// logink.getTenancyText().type(tenancy)
// logink.getSubmitB().click()
//         //cy.get('#userNameOverlay').type(username)
//     })

// })
// })