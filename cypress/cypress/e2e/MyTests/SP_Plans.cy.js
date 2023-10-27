describe("Speech Pundit Home Page",()=>{
    it("Test case-Home Page",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(6000)
        cy.get(".nav-item >[href='/plans']").click()
        cy.wait(4000)
        cy.go('back')
        
    })
})