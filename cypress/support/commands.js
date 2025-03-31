// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import objectRepoIndex from "../objectRepository/objectRepoMain.js";

Cypress.Commands.add("getPageObject", (pageName) => {
    const page = objectRepoIndex[pageName];
    if (!page) {
      throw new Error(`getPageObject command error: Page '${pageName}' not found in object repository.`);
    }
  
    cy.wrap(page).as("pageObject");
  });