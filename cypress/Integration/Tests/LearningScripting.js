describe ('TimesOfIndia', ()=>{
    
it.only('Click on any one link', ()=>{

cy.visit ('https://rahulshettyacademy.com/AutomationPractice/#top')
//cy.wait(50000)
//cy.contains('IT & Software').click()
//cy.wait(25000)
cy.get('#product tbody tr td:nth-child(2)').each(($e1,index,$list)=>{

var plan = $e1.text()

if (plan.includes('Python'))
    {
        cy.get('#product tbody tr td:nth-child(2)').eq(index).next().then((data)=>{
            var planType = data.text()
            cy.log (planType)
        })
    }
//cy.log (plan)



})

})





}
)