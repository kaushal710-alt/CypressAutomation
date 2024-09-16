import 'cypress-iframe'

describe ('Practice Cypress Interview', () =>{

beforeEach(() =>{

cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')

})

it('Test Case to select Radio button',()=>{

    var arrayForRadioButton = []

cy.get('div#radio-btn-example fieldset').each((data)=>{
    var variable1 = data.text()
    //cy.log(variable1)
    arrayForRadioButton.push(variable1)

}).then(()=>{
    cy.log('the options present in the drop down are'+ ' ' + arrayForRadioButton)
   // cy.get('input[value="radio1"]').click()
    //cy.get('input[value="radio1"]').check(' Radio1 ')
    cy.get('input[value="radio1"]').check()
})

})
 it('Selecting options from down menu',()=>{
        var arrayDropDownMenu = [];

        cy.get('#dropdown-class-example').each((data)=>{

            arrayDropDownMenu.push(data.text())

        }).then(()=>{

            cy.log( arrayDropDownMenu)
            var option = arrayDropDownMenu[3]
            cy.log('second value in drop down is '+ option)
            cy.get('#dropdown-class-example').select('Option2')
            cy.get('#dropdown-class-example').select(3)
            cy.get('#dropdown-class-example').contains('Option1').click({force:true})
            cy.get('#dropdown-class-example').should('have.value', 'option3')


            const filePath1 = 'cypress/fixtures/Duplicate.json'
            cy.writeFile(filePath1,arrayDropDownMenu)
               
            // for (let i=0;i<arrayDropDownMenu.length;i++)
            //     {
            //         var optioninDropDown = arrayDropDownMenu[i]
            //         cy.log('first option in the drop down'+ ' '+optioninDropDown)
            //         var optioninDropDown1 = optioninDropDown.toString()
            //         cy.log (optioninDropDown1)
                //     if (optioninDropDown1=== 'Option1')
                //         {
                //             cy.get('#dropdown-class-example').select(optioninDropDown1)                        }

                // }
        // })






 })

 })
     it('Auto Suggestive drop down', () =>{
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((optionDropDown) =>{
                if (optionDropDown.text() === "India")
                    {
                       cy.wrap(optionDropDown).click()
                    }
        })
     })

     it('CheckBox',()=>{
// cy.get('div#checkbox-example fieldset label input').each((checkboxes) => {

// cy.wrap(checkboxes).click()
// cy.wrap(checkboxes).uncheck().should('not.be.checked');

cy.contains('label','Option1').find('input[type="checkbox"]').check().should('be.checked')
cy.contains('label','Option2').find('input[type="checkbox"]').check().should('be.checked')
cy.contains('label','Option3').find('input[type="checkbox"]').check().should('be.checked')

cy.contains('label','Option2').find('input[type="checkbox"]').uncheck().should('not.be.checked')

cy.contains('label','Option2').find('input[type="checkbox"]').check().should('be.checked')

cy.get('input[type="checkbox"]').check()
cy.get('input[type="checkbox"]').uncheck()

//


// })




     })

it('Alert Practices',()=>{

cy.get('#alertbtn').click()
cy.on('window:alert',(str)=>{

expect(str).to.equal('Hello , share this practice page and share your knowledge')

})
cy.get('#confirmbtn').click()
cy.on('window:confirm',(str)=>{

    expect(str).to.equal('Hello , Are you sure you want to confirm?')
    return false
    
    })

})

it('Handling Child tab and new Window and Different Origin concept',()=>{
//cy.get('#openwindow').invoke('removeAttr','openwindow').click()
//cy.get('#openwindow').invoke('removeAttr','onclick').click()
cy.get('#opentab').invoke('removeAttr','target').click()

cy.origin('https://www.qaclickacademy.com/',()=>{
    cy.get("#navbarSupportedContent a[href*='about']").click();
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')
})
//cy.visit('https://rahulshettyacademy.com/AutomationPractice/#top')

})

it('Handling Webtable',()=>{
cy.get('tbody:nth-child(1)').find('tr td:nth-child(2)').each(($e1,index,$list)=>{
const text = $e1.text()
//cy.log(text)

cy.pause()
if (text.includes('WebSecurity')){

cy.get('tbody:nth-child(1) tr td:nth-child(2)').eq(index).next().then((data)=>{

    const text1 = data.text()
    cy.log ('the value of text corresponds to' + ' ' +text1)
})
}
})
})

it ('How to handle frame', ()=>{


    //cy.iframeLoaded('#courses-iframe')
    cy.frameLoaded('#courses-iframe')


    //cy.iframe().contains('Job Support').click()

    cy.iframe().find('a[href*="consulting"]').eq(0).click()


})

it('Mouse Over scenario', ()=>{

//cy.get('#mousehover').trigger('mouseover')
//cy.get('a[href*="#top"]').click({force:true})
cy.get('#mousehover').invoke('show')
//cy.wait(10000)
cy.get('a[href*="#top"]').click({force:true})


cy.origin('https://www.geoworkz.com/',()=>{

cy.visit('https://www.geoworkz.com/')
cy.get('#btnAccept').click({ force: true })


cy.get('#menuProduct').invoke('show')
cy.get('#menuOurPlan').click({force:true})

})


})

it.only ('How to fetch particular value from string array', ()=>{

const arrayOrig = ["Apple", "Banana", "Carrot","Cucumber","Cucumcer"];
const searchText = "Cucum";

const result = arrayOrig.filter(element=>element.includes(searchText))
//cy.log(result)

const arrayOrig1 = ["Apple", "Banana", "Carrot","Cucumber","Cucumcer"];
cy.log ('it is passed')
cy.log('it is failed')

const result1 = arrayOrig.find(element=>element.includes('Ban'))
cy.log(result1)




})






































































})