/// <reference types="Cypress" />

import HomePage from '../../support/PageObjects/HomePage'
import ProductsPage from '../../support/PageObjects/ProductsPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";


const homePage=new HomePage()
const productsPage=new ProductsPage()
let name

Given('a user that opens Ecommerce page', function(){
    cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
})

When('the user add items to the cart', function(){
    homePage.getShopTab().click()
    cy.wait(2000)

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })
    productsPage.checkOutButton().click()
})

And('the user validate the total price', function(){
    var sum=0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=>{
        //cy.log($el.text())
        const amount=$el.text()
        var res=amount.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)
        cy.log(res)
    }).then(function(){
        cy.log(sum)
    })
    cy.get('h3 strong').then(function(element){
        const totalAmount=element.text()
        var res=totalAmount.split(" ")
        var Total=res[1].trim()
        expect(Number(Total)).to.be.equal(sum)

    })
})

Then('the user selects the country and verify the purchase', function(){
    cy.contains('Checkout').click()
    productsPage.CountryTypeBox().type('India')
    cy.wait(2000)
    productsPage.CountryDropwdown().click()
    productsPage.checkCheckbox().click({force:true})
    productsPage.purchaseButton().click()
    //productsPage.confirmationMessage().should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
    //This is a method in case the text have some spaces  or extra elements in the text \n that we can test, is another way to compare the message
    productsPage.confirmationMessage().then(function(element){
        const actualText=element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})