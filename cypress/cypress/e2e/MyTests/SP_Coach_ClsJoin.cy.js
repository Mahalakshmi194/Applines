describe("Speech Pundit",()=>{
    it("Dashboard-Class timings",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(3000)

        //Classes - join / done / upcoming
        cy.get(".card-body >div").eq(1).find(".eachItem >div").eq(5).find("button").should("contain","Done").click()
        cy.wait(4000)
        cy.get(".card-body >div").eq(2).find(".eachItem >div").eq(5).find("button").should("contain","Upcoming").click()
        cy.wait(4000)
        cy.get(".card-body >div").eq(0).find(".eachItem >div").eq(5).find("button").should("contain","Join").click()
        cy.wait(5000)
        cy.go('back')
        cy.wait(5000)


        

    })
})