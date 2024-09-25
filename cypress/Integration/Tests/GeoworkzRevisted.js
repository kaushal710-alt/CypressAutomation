const {Homepage} = require ("../../pageObjects/Homepage")
const objectHomepage = new Homepage ()

const {CartPage} = require ('../../pageObjects/CartPage')

const objectCartPage = new CartPage ()

describe ('Agency Annual plan with 750k words', ()=>{
    var number=0
it('Agency 750k plan', ()=>{

    var array = []
    cy.fixture('example').then((data)=>{



    
    cy.urlfunction(Cypress.env('url'))

    objectHomepage.getClickOnExploreLink().click()

    cy.get('ul[class="plan-tabs animated fadeInDownShort go"] li:nth-child(2)').click()

    cy.get('div[class="plan-data"] div div div[id="lblAgencyWord"]').each(($el,index,$list)=>{

var noOfPlans = $el.text()
//cy.log (noOfPlans)

number = index;
//cy.log (number)
    }).then (()=>{
           var TotalNumberOfAgencyPlans = number + 1
        //cy.log ('There are total'+ TotalNumberOfAgencyPlans  +' '+'of plans for Agency')
        expect (TotalNumberOfAgencyPlans).to.equal(9)
    })

    cy.get('div[class= "plan-data"] div:nth-child(2) div[class="row"]:visible').each(($el,index,$list)=>{

    var noOfWords1=$el.text().toString()
    //var noOfWords1 = parseInt($el.text())

    if (noOfWords1.includes('750,000'))
        {

            cy.log (noOfWords1)

            cy.wrap($el).find('input[type="radio"]').check({force:true})
            //cy.wrap($el).find('button[type="button"]').should('have.text','Buy Now')
            cy.wrap($el).find('button[type="button"]',{defaultCommandTimeout:10000}).should('be.visible')
            cy.wrap($el).find('button[type="button"]').click()
        }

    })

    //cy.get('button[type="button"]').filter(':visible').click({multiple:true})

    cy.title().then((titleText)=>{

       var title1= titleText
       //var titleExpected = data.CartPageTitle

       cy.readFile('cypress/fixtures/example.json').then((data1)=>{
        var variable = data1.CartPageTitle
        cy.wrap(titleText).should('contain',variable)
       })
   
       //expect(title1).to.equal(titleExpected)
    })

    cy.title().should('contain','Cart')

    //cy.get('select').select(5)

    cy.get('select').select('5: $+210/Monthly')

    objectCartPage.getClickOnCheckOutbutton().click()

    cy.title().then ((titleCheckout)=>{

//expect(titleCheckout).to.include('CheckOut')

    })

    cy.title().should('contain','CheckOut')

    cy.get('#Username').click()
    cy.get('#FirstName').click()
    //cy.get('#Username-error').should('have.text','You must supply a username')
    cy.get('#Username-error').should('contain','supply a username')

    //cy.get('.tooltip-content').invoke('show').should('contain','What is a Tenancy')

    cy.contains('What is this?').invoke('show').should('contain','What is a Tenancy')

    cy.get('input[type="checkbox"]').check({force:true})

    //cy.FillCheckoutForm()

   // cy.get('select').contains('210').click({force:true})

//    cy.get('#ddlNoOfLicense').each((options)=>{

// var optionsActual = options.text().toString()
// //cy.log (optionsActual)
// array.push(optionsActual)


//    }).then(()=>{

//     var fifthOption = array.find (element=>element.includes(210))

//     cy.log (fifthOption)
//    })

//    //cy.log (array[5])

   




    

})

})





})




