//import Homepage from '../pageObjects/Homepage'

const { Homepage } = require('../../pageObjects/Homepage')
//const Homepage = require('../pageObjects/Homepage')
const {AllPlansPage} = require('../../pageObjects/AllPlansPage')
const {CartPage} = require ('../../pageObjects/CartPage')

const clickOnExploreLink = new Homepage()
const allPlansPage = new AllPlansPage()
const carPageObject = new CartPage()

describe ('Suite for Regression testing', ()=> {

    beforeEach(()=>{
                cy.urlfunction(Cypress.env('url'))
    })

    it.only('Agency 20K Annual Subscription',()=>{
var arrayNumberOfLicenses = [];
        cy.fixture('example').then ((data) =>{

              var planDesc = data.AgencyAnnually20K
              var planDescString = planDesc.toString()
              cy.log(planDescString)
       // const clickOnExploreLink = new Homepage1()

        //const clickOnExploreLink1 = Cypress.require('./pageObjects/Homepage');
        //const clickOnExploreLink = new Homepage()
        //clickOnExploreLink.g
        clickOnExploreLink.getClickOnExploreLink().click()
        allPlansPage.getClickOnAgencyBanner().click()
        cy.get('div.row label[id="lblAnnualCost6"]').then ((variable) =>{
           var planDescActual = variable.text()
        var planDescActualString = planDescActual.toString()
        if (planDescActualString === planDescString)
            {
                cy.get('div.row label[id="lblAnnualCost6"]').prev().click({force:true})
                allPlansPage.getClickOnBuyNowButtonFor20KAgency().click()

            }

            cy.get('#ddlNoOfLicense').each((dropdownOptions)=>{
var dropDownoptions1 = dropdownOptions.text()
arrayNumberOfLicenses.push(dropDownoptions1)
            }).then(()=>{
                cy.log(arrayNumberOfLicenses)
                 const searchTextInArray = "420"
                 cy.pause()
                 const result = arrayNumberOfLicenses.find(element => element.includes(searchTextInArray));
                 cy.log('the option to select from drop down is ' + '  ' +result)
                 cy.get('#ddlNoOfLicense').contains('420').click({force:true}); 
                 cy.get('select').select('10: $+420/Monthly');
                 cy.get('select').select(2);
                 carPageObject.getClickOnCheckOutbutton().click()
                 cy.FillCheckoutForm()

            })
        })

    })

})














})

