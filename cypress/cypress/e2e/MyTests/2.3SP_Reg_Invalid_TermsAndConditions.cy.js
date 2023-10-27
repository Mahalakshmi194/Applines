describe("Test Cases on Speech Pundit",()=>{
    it("test case-1 Registration",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(6000)
        // cy.get('.d-done  [href="/register"]').click()
        cy.get('.d-none > .btn').click()

        cy.get('[name="firstName"]').type("Hema")
        cy.get('[name="lastName"]').type("Pantham")
        cy.get('[name="email"]').type("hema.pantham@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        // cy.get('[style="margin-right: 40px;"] > .form-check-input').click() //Register as Student 
        cy.get("[value='Coach']").click()   //Register as a Coach
        // cy.get('.form-check > .form-check-input').click()
        cy.get('[style="text-align: center;"] > .btn').click()  
        cy.wait(4000)

        

    })

})