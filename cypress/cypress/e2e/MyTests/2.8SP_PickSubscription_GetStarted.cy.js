describe("Speech Pundit",()=>{
    it("test case-1 Login and Buy Plan monthly for Student",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+student50@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)


        //Pick up a Subscription and select get started Monthly
        cy.get('.nav-content').trigger("mouseover").wait(2000)
        cy.get('[href="/pricing"]').click()
        cy.get('[href="/pricing/usersubscriptions"]').click()
        cy.get('h3').contains("No data to display").click()
        // // log Out
        // cy.get(".nav-content").trigger('mouseover')
        // cy.get(".user-container").click()
        // cy.get("[href='/login']").click()
        // cy.wait(3000)

    })
})