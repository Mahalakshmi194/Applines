describe("Speech Pundit",()=>{
    it("test case-1 Login and Buy Plan for monthly",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+student4@applines.com")
        cy.get('[name="password"]').type("asdf123")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)


    })
})