class HomePage{

    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
        //cy.get('input[name="name"]:nth-child(2)').
    }

    getTwoWayDataBinding(){
        return  cy.get(':nth-child(4) > .ng-untouched')
    }

    getGenger(){
        return cy.get('select')
    }

    getEnterpreneaur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;