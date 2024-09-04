export class Homepage 
{
getURL ()   
    {
       return Cypress.env('url')
    }
}
export default Homepage