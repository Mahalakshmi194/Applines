describe("Speech pundit",()=>{
    it("test case- Add Parent",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+student2@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)

        //profile Update
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/user-profile']").click().wait(2000)
        //Add parent
        cy.get('[type="button"]').contains("Add Parent").click()
        cy.get(".col-lg-6 >[name='firstName']").type("Rose")
        cy.get(".col-lg-6 >[name='lastName']").type("R")
        cy.get(".col-lg-6 >[name='email']").type("rose@gmail.com")
        cy.get("[value='Female']").click()
        cy.get('#registerForm > .btn').click()
        cy.wait(4000)

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()
        
       
    })
})