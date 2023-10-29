describe('CSSLocators', () =>{
it("CSSlocator",() =>{

    cy.visit("https://naveenautomationlabs.com/opencart/")

    cy.get("input[placeholder='Search']").type('Apple')

    cy.get("#search button").click()

   // cy.get(".product-layout:first-child h4:first-of-type a").contains("Apple")
    


})



})
