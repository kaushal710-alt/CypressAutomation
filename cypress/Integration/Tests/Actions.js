//import { Homepage } from 'cypress/pageObjects/Homepage';
//import { Homepage} from 'cypress/pageObjects/Homepage';
import {Homepage} from '../../pageObjects/Homepage'
describe ('URLLaunch',  () => 
    {
        beforeEach (() =>
           cy.urlfunction(Cypress.env('url'))
    )
        it ('Geoworkz URL Launch', function ()
         {
            cy.title().should('eq','GeoWorkz - Home')
            const var1 = "Hello"
            const var2 = "World"
            const var3 = var1 + var2
            cy.log(var3)
            cy.log('Homepage URL is launched1')
        const variable1 = new Homepage ()
        //variable1.getURL
        })

        it ('Click on Our Plans page to navigate to see all plans', function ()
        {
            cy.NavigateToOurPlans()
       })
       it ('Verify how many Freelancer plans exists', function ()
       {
        cy.NavigateToOurPlans()
        cy.get(':nth-child(2) > .grid-body').find('#lblFreelancerWords:visible').each(($el, index, $list) => {
           //
           //var n = index
            const noOfWords = $el.text();
            cy.log(`Word count: ${noOfWords}`);
            cy.log(`Index: ${index}`);
            cy.log(`List: ${$list}`);
            cy.wrap($el).click();
            n = n +1
            cy.log(n)
            cy.log(index)
            if (n=! index)
                {
                    cy.log(n + 'is the total number of plans')
                }
            })


      })
      it ('Click on Radio button for 5000 words Monthly Plan', function ()
      {
       cy.NavigateToOurPlans()
       cy.get('#lblMonthlyCost1').click().should('be.checked')
           })
    it ('Click on Buy Now button', function ()
           {
            cy.NavigateToOurPlans()
            cy.get('#lblMonthlyCost1').click()
            cy.get('#btn1').click()
                })
    it ('Click on Checkout button', function ()
           {

            cy.NavigateToOurPlans()
            cy.get('#lblMonthlyCost1').click()
            cy.get('#btn1').click()
            cy.contains('CHECKOUT').click()
            cy.FillCheckoutForm()
        })


        it ('Freelancer Monthly 30K Plan', function ()
           {
            //let planType
    cy.fixture('example').then((variable123) => {

        var planType = variable123.FreelancerMonthly30K
        var subtotal = variable123.SubtotalcerMonthly30K
        cy.log(planType)
            cy.NavigateToOurPlans()
            cy.get('#lblMonthlyCost2').then((data) => 
                {
const label = data.text()
//cy.log (label)
    //cy.log (planType)
if (label === planType){
cy.get('#lblMonthlyCost2').prev().click({force:true});
//cy.get('button').contains('B').filter(':visible').click({force:true});
//cy.contains('Buy Now').filter(':visible').click({force:true})
//cy.get('.btn btn-default freelancer btnBuyplan').filter(':visible').click({force:true})
cy.get('#btn2').click()
//cy.contains('Buy Now').should('not.be.disabled').click({force:true})
cy.get('#lblplanDetails').then((data) => {

    const typeOfPlan = data.text()
    cy.log(typeOfPlan)
})

cy.get('#lblplanDetails').next().then ((data) =>{
const noOfWords = data.text()
cy.log(noOfWords)
})
cy.get('#lblplanDetails').siblings().eq(1).then((datax) =>{

    const noOfLicenses = datax.text()
    cy.log('The number of licenses in the selected plan is' + ' ' +noOfLicenses)

})

cy.get('#lblplanDetails').siblings().eq(2).then((datay) =>{

    const packageDetails = datay.text()
    cy.log(packageDetails)

})
cy.get('div.subtotal-container div div').next().then(text1 => {
const text2 = text1.text()
cy.log(text2)
cy.log(subtotal)

if (text2===subtotal)
    {
        cy.contains('CHECKOUT').click()
    }
    cy.contains('CHECKOUT').click()
    cy.FillCheckoutForm()


})
//
}

     })
            
})

     })


     it ('How to write value into JSON file',  () => {
        cy.contains('Contact').click()
        cy.get('div.col-xs-6 div:nth-child(1) input[name="FirstName"]').type('Kaushal')
        cy.get('div.col-xs-6 div:nth-child(1) input[name="FirstName"]').invoke('val').then((data) => {
            const filePath = 'cypress/fixtures/Duplicate.json';
            cy.writeFile(filePath, {firstName: data})
        })
      
     })

     it.only ('How to read options from drop down',  () => {
        let optionsArray = [];
        cy.contains('Contact').click()
        cy.get('div.select:nth-child(1)').each((data) =>{
        optionsArray.push(data.text())
        }).then(() =>{
            
            const filepath = 'cypress/fixtures/Duplicate.json';
            cy.writeFile(filepath, optionsArray)

            cy.log(optionsArray)
            //return false


        })
      
     })



    })

    