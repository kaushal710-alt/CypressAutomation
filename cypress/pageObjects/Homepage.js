export class Homepage 
{
getURL ()   
    {
       return Cypress.env('url')
    }

    getClickOnExploreLink () 
    {
        return cy.get('div.common-plan-box a[href="/Plans/Freelancer"]')
    }
}
export default Homepage