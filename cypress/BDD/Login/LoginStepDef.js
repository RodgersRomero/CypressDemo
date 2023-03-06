/// <reference types="Cypress" />

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";


Given('A user that is on the home screen', function(){
    cy.visit('https://d2p59vj0lhlswi.cloudfront.net')
})

// When('the user clicks the sign in button', function(){
   
// })

// Then('then the user is redirected to the login screen', function(){
    
// })