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
            cy.log('Homepage URL is launched1')
        const variable1 = new Homepage ()
        //variable1.getURL
        })

        it ('Click on Our Plans page to navigate to see all plans', function ()
        {
            cy.get('#menuProduct').trigger('mouseover');
           // cy.wait(5000)
            cy.get('#menuOurPlan').should('be.visible');
            cy.get('#menuOurPlan').first().click();
       })

       it ('Verify how many Freelancer plans exists', function ()
       {
        
        cy.get('#secFreelancer').find('#lblFreelancerWords').each(($el, index, $list) => {
            const noOfWords = $el.text();
            cy.log(`Word count: ${noOfWords}`);
            cy.log(`Index: ${index}`);
            cy.log(`List: ${$list}`);
            cy.wrap($el).click();




            })
      })


    })