const {Homepage} = require ('../../pageObjects/Homepage')
const {CartPage} = require ('../../pageObjects/CartPage')

const clickOnExploreLink123 = new Homepage ()
const verifyHeaderCartpage = new CartPage()

describe ('End to End Validation for Enterprise hightest plan',()=>{
var array1 = []
beforeEach(()=>{
    cy.visit("https://www.geoworkz.com")
    cy.get('#btnAccept').click({force:true})
})
it ('Enterprise Highest Plan', ()=>{
cy.fixture('example').then ((data)=>{
    cy.title().then ((title1)=>{
        cy.log (title1)
    })
    clickOnExploreLink123.getClickOnExploreLink().click()

    cy.title().should('eq','GeoWorkz - Our Plans')

    cy.title().should('include','Our Plans')

    cy.get('#lblAnnuallyCost17').then((grabText)=>{
            var planType = grabText.text()
            var planTypeString = planType.toString()

            cy.log (planTypeString)


            cy.get('#lnkEnterprises').click()

            if (planTypeString.includes("$12,834")){
                cy.get('#10003215-000007_Enterprise_Monthly_USD_1000000').click({force:true})
            }
            
            cy.get('#btn17').click()
            cy.get('div.grid-body div:nth-child(1)').then ((textTypeOfPlan)=>{

                const planTypeEnterprize = textTypeOfPlan.text()
                cy.log ('Enterprize type of plan is' + ' '+ planTypeEnterprize)

                cy.get('div.grid-body div:nth-child(1)').next().then((noOfWords)=>{

                    const noOfWordsActual = noOfWords.text()
                    cy.log ('Number of words are:' + " " + noOfWordsActual)
                })

cy.get('#ddlNoOfLicense').each((options123)=>{

var optionInDropDown = options123.text()
array1.push(optionInDropDown)

for (let i=0;i<array1.length;i++)
    {

        var varArray = array1[i].toString()
        console.log (varArray)
        if (varArray.includes('420'))
            {
                //
                //cy.get('#ddlNoOfLicense').select(varArray)

                cy.get('#ddlNoOfLicense').select('10: $+420/Monthly')
                //cy.get('#ddlNoOfLicense').contains('$+420').click({force:true})

            }
            //cy.get('#ddlNoOfLicense').select(8)



    }


    cy.get('div.col-sm-6 h1:nth-child(1)').then((first)=>{
               const first1 = first.text()
               cy.log('the name of the header is' + ' ' + first1)
               verifyHeaderCartpage.getClickOnCheckOutbutton().click()
               //cy.get('#tltipTenancy').trigger('mouseover')
               //cy.get('#tltipTenancy').find('.tooltip-content').should('be.visible').and('contain','What is a Tenancy?A Tenancy is a unique area within Translation Workspace that is owned by each customer. Please see the FAQ for a more complete explanation regarding Tenancies.')

    })

    
})
//cy.log(array1)




            })
            

                
            

    })


})




})




})