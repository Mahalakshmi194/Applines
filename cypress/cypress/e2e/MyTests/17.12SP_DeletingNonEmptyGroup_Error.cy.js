describe("Speech Pundit",()=>{
    it("Create Group",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(3000)

        //User Info
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("[href='/user']").click().wait(1000)
        cy.get("[href='/user/groups']").click()
        cy.get("#nav").trigger("mouseout").wait(2000)

        cy.get("#tasksContainer").contains("APPLINES").parent().parent().parent().parent().parent().prev().find("svg").click()
        cy.wait(2000)
        cy.get("a").contains("Delete").click()
        cy.scrollTo(0,0)

    })
})