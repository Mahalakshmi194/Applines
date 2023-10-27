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

        cy.get("[href='/user/user-info/2038']").click()
        cy.wait(2000)
        cy.get(".tab-content >[role='tabpanel'] >button").click()

        cy.get(".tooltip-end-top >[name='firstName']").type("Srii")
        cy.get(".tooltip-end-top >[name='lastName']").type("S")
        cy.get(".tooltip-end-top >[name='email']").type("hema.pantham+student3@applines.com")
        cy.wait(2000)
        cy.get('.margin > .float-right').click()
        cy.get("form >div").eq(2).find("li >div").eq(2).find("button").click()
        cy.wait(3000)

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()

        

    })
})