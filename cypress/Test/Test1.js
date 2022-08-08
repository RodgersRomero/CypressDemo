/// <reference types="Cypress" />

describe('My first test suite', function() {

    it('My first Test case', function(){
        // test step

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //In Cypress get acts like findElement of Selenium
        cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        cy.get('.products').as('productLocator') // With this we can use now .products in multiple places without need to declare it everytime
        //cy.get('@productLocator').find('.product').should('have.length', 4)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        // Each method ussage
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }

        })
        //Example of how to resolve a promise manually
        //Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        //This is to print in logs
        cy.get('.brand').then(function(logoElement){
            cy.log(logoElement.text())

        })
        //cy.get('.brand').text() -> will show an error
        
    })
}
)