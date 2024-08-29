class Login_Final
{
getUserNameText()
{
return cy.get('#userNameOverlay')
}

getPasswordText()

{
    return cy.get('#passwordInput')
}

getTenancyText() 
{
    return cy.get('#tenantInput')
}

getSubmitB() 
{
    return cy.get('#submitButton')
}

}

export default Login_Final;