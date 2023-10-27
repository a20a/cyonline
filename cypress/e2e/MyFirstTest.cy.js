describe('Login Tests', () => {
    it('passes', () => {
        //Steps
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.title().should('eq','OrangeHRM')
    })
  })