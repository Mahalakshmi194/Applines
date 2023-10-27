describe("Assertions",()=>{
    it("Implicit assertions",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        //should , and
        cy.url().should('include','speechpundit.com')
        cy.url().should('eq',"https://dev02.speechpundit.com/landing-page")
        cy.url().should('contain','dev02')

        // or for multiple assertions:-
        // cy.url().should('include','speechpundit.com')
        // .should('eq',"https://dev02.speechpundit.com/landing-page")
        // .should('contain','dev02')


        //insted of using 'should' we can use 'and'
        cy.url().and('include','speechpundit.com')
        cy.url().and('eq',"https://dev02.speechpundit.com/landing-page")
        cy.url().and('contain','dev02')

        //Negative assertions
        cy.url().should('not.include','speechpundit.in')
        .should('not.eq',"https://dev02.speechpundit.com/landing-page00000000000")
        .should('not.contain','dev02143')

        //should with single value
        cy.get('.navbar-brand').should('exist')
        .should('be.visible')


    })
})