describe("Speech Pundit Home Page",()=>{
    it("Test case-About Page",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(6000)
        cy.get(".nav-item >[href='/about']").click()
        cy.wait(4000)
        cy.go('back')
        cy.wait(3000)
        
    })

    it.only("Test case-Contact Page",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(6000)
        cy.get(".nav-item >[href='/contact']").click()
        cy.get("#fname").type("Hema")
        cy.get("#lname").type("Pantham")
        cy.get("#email").type("hema.pantham@applines.com")
        cy.get("#purpose").select("Plans and Pricing")
        cy.get("textarea").type("Reduce cost for plan")
        cy.get("[type='submit']").click()
        cy.wait(4000)
        cy.go('back')
        
    })
})