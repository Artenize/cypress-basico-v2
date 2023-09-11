Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){

cy.get('#firstName').type('Joaquina')
  cy.get('#lastName').type('Silva Damaceno')
  cy.get('#email').type('joaquina.silva@gmail.com')
  cy.get('#phone').type('11943502543')
  cy.get('#open-text-area').type('teste')
  cy.contains('button', 'Enviar').click()
})