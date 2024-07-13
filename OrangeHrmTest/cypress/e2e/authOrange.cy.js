
/// <reference types="cypress" />
const autenticacion = require('../tasks/authentication');
const question = require('../questions/validations');
const recruitment = require('../pages/recruitment');
const hired = require ('../pages/hired')

describe('Orange login', () => {
  

  before(() => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.title().should('eq', 'OrangeHRM');
    cy.viewport(1920, 1080);
    cy.wait(2000)
    cy.screenshot('home-page');
   
  });

  it('should login successfully and verify entered data', () => {
    cy.auth('Admin', 'admin123');
    cy.screenshot('index-page');
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible');
    //cy.screenshot('home-page');
    cy.recruitment();
    cy.add();
    cy.screenshot('recruitment');
    cy.wait(3000);
    //cy.add();
    cy.wait(3000);

    // expected data
    const expectedData = {
      firstName: 'Pedro',
      middleName: 'Emilio',
      lastName: 'Pascal',
      email: 'test@test.com',
      contactNo: '656577777',
      keywords: 'QA,AUTOMATION,CYPRESS,JOB',
      notes: 'Lorem ipsum nothing more to say',
    };
    // Inputd data
      cy.cName(expectedData.firstName, expectedData.middleName, expectedData.lastName);
      cy.job(expectedData.email, expectedData.contactNo, expectedData.keywords, expectedData.notes, expectedData.applicationDate);
      cy.checkSuccessToast();
      cy.wait(10000);
      cy.screenshot('input-data');
      // validate data
      question.validateEnteredData(expectedData);
      cy.hired()
  });
   
});
