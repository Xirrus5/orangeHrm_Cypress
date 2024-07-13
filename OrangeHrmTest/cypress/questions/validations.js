const title = require('../pages/recruitment')
const success =require ('../pages/recruitment')
const recruitment = require('../pages/recruitment');

Cypress.Commands.add("homePage", () => {
    cy.get(title.HOME_PAGE_TITLE).should("contains.text", "Dashboard")
})

export function validateEnteredData(expectedData) {
  cy.get(recruitment.ADD_GIVEN_NAME).invoke('val').should('eq', expectedData.firstName);
  cy.get(recruitment.ADD_MIDDLE_NAME).invoke('val').should('eq', expectedData.middleName);
  cy.get(recruitment.ADD_SURNAME).invoke('val').should('eq', expectedData.lastName);
  cy.get(recruitment.ADD_EMAIL).invoke('val').should('eq', expectedData.email);
  cy.get(recruitment.ADD_PHONE_NUMBER).invoke('val').should('eq', expectedData.contactNo);
  //cy.get(recruitment.ADD_KEYWORDS).invoke('val').should('eq', expectedData.keywords);
  cy.get(recruitment.ADD_NOTES).invoke('val').should('eq', expectedData.notes);
}

Cypress.Commands.add("checkSuccessToast", () => {
    cy.get(success.SUCCESS).should("exist");
});

