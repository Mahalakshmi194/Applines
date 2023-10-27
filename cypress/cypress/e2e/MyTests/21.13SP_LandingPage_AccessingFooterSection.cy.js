describe("Speech Pundit",()=>{
    it("Test case-Try Now ",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.scrollTo("bottom")

    })
})