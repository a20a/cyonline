describe('Opening a Webpage', () => {
    it('passes', () => {
        //Steps
      cy.visit('https://opensource-demo.orangehrmlive.com')
      cy.title().should('eq','OrangeHRM')
    })
  })

  //Part§: What is the hirarcy folowed in cypress.
  // Useful commands: npx cypress run --spec cypress/e2e/MyFirstTest.cy.js --browser firefox --headed
  //How to run specific spec file from terminal in a specific browser in Headless or Headed mode.


