describe('My test cases',()=>{
    it('test-1 visit Google-positive test',()=>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq',"Google")
    })

    it('test-2 visit Google-negative test',()=>{
        cy.visit("https://www.google.com/")
        cy.title().should('eq',"Google143")
    })
})