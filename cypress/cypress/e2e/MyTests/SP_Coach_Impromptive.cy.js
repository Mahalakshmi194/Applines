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
        cy.get("[href='/parallaxcards']").click()
        cy.wait(2000)
        cy.get(".progressbar >div").eq(2).find("div >.task-item").eq(2).trigger('mouseover').wait(2000)
        cy.get(".progressbar >div").eq(2).find("div >.task-item").eq(2).find(".dcard >.trigger").eq(4).click()
        cy.wait(3000)
        cy.get(".impromptuCustom >button").click()
        cy.wait(2000)
        cy.get(".start-btn-div").click()
        cy.wait(3000)
        cy.get(".done-btn-div").click()
        cy.wait(3000)
        cy.get("h4 >a").click()
        cy.wait(4000)



        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()
        


        

    })
})