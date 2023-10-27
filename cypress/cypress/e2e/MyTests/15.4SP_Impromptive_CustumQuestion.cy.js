describe("Speech Pundit",()=>{
    it("Impromptive",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(3000)

        //Groups - Impromptive
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >:nth-child(7)").click().wait(1000)
        cy.get("[href='/user/impromptu']").click()
        cy.get("#nav").trigger("mouseout")
        cy.wait(2000)

        cy.get('span').contains("Add New").click()
        cy.wait(2000)
        cy.get('button').contains("Custom Impromptu").click().wait(2000)
        cy.get('button').contains("Add Custom").click()
        cy.get("#controlled-tab-example-tabpane-customImpromptu").find('input').type("Moon")
        cy.wait(2000)
        cy.get("[style='float: right;']").click()

    })
})