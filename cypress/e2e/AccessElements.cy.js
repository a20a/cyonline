describe('CSSLocators', () =>{
it("CSSlocator",() =>{

    cy.visit("https://www.otto.de/")

    cy.get("input[placeholder='Wonach suchst du?']").type("Apple airpods")

    cy.get("//div[@data-qa-id='search-field-submit']//*[name()='svg']").click


})



})
