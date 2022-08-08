class ProductsPage{

    checkOutButton(){
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
    }

    CountryTypeBox(){
        return cy.get('#country')
    }
    
    CountryDropwdown(){
        return cy.get('.suggestions > ul > li > a')
    }

    checkCheckbox(){
        return cy.get('#checkbox2')
    }

    purchaseButton(){
        return cy.get('input[type="submit"]')
    }

    confirmationMessage(){
        return cy.get('.alert')
    }

}

export default ProductsPage;