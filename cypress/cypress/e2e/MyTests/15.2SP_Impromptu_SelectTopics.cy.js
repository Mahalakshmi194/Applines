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
        cy.get('button').contains("thoughts & ideas").click()
        cy.get('div').contains("Can money buy happiness? Share your thoughts").prev().find('input').click()

        // cy.get('button').contains("travel & lifestyle").click()
        // cy.get('div').contains("Should there be a travel restriction for small islands?").prev().find('input').click()

        cy.get('[style="display: flex; justify-content: flex-end;"] >button').click()
       

    })
})