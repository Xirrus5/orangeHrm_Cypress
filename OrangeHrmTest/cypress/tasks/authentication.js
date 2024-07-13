const login_page = require('../pages/login_page')
const recruitment = require ('../pages/recruitment')
const hired = require ('../pages/hired')
const actions = require('../interactions/actions')


Cypress.Commands.add("auth", (user, password) => {
    cy.get(login_page.INPUT_USER).type(user)
    cy.get(login_page.INPUT_PASSWORD).type(password)
    cy.get(login_page.BTN_LOGIN).click()
    
})
Cypress.Commands.add("recruitment", () => {
    cy.get(recruitment.RECRUITMENT).click()
       
})
Cypress.Commands.add("cName",(givenName,midName,surName) => {
cy.get(recruitment.ADD_GIVEN_NAME).type(givenName);
cy.get(recruitment.ADD_MIDDLE_NAME).type(midName);
cy.get(recruitment.ADD_SURNAME).type(surName);
     })

Cypress.Commands.add("job",(email,phone,keywords,notes) => {
  cy.get(recruitment.SELECT_JOB).click()
  cy.get (recruitment.SELECT_QA_JOB).click()
  cy.get (recruitment.ADD_EMAIL).type(email)
  cy.get (recruitment.ADD_PHONE_NUMBER).type(phone)
  cy.get (recruitment.ADD_KEYWORDS).type(keywords)
  cy.get (recruitment.ADD_NOTES).type(notes)
  cy.get (recruitment.CHECKBOX).click()
  cy.get  (recruitment.SAVE).click()
  
 })

Cypress.Commands.add("add",() => {
    cy.get(recruitment.ADD).click()
    
})
Cypress.Commands.add("hired",() => {
    cy.get(hired.SHORT_LIST).click();
    cy.get (hired.SAVE_BTN).click();
})

Cypress.Commands.add("upload",() => {
    cy.get(hired.SHORT_LIST).click();
    cy.get (hired.SAVE_BTN).click();
})
