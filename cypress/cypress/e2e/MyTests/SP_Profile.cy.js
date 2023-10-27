describe("Speech Pundit",()=>{
    it("test case-1 Update Profile",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham@applines.com")
        cy.get('[name="password"]').type("Asdf@1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)

        //Search elements
        cy.get("#nav").trigger('mouseover')
        cy.get("[href='#/'] >.search").trigger('mouseover').wait(2000).click()
        cy.get("#searchPagesInput").type("assessment report").wait(2000)
        cy.get("#searchPagesResults").trigger('mouseover').wait(2000).click()
        cy.get("#nav").trigger('mouseover').trigger('mouseout')
        cy.wait(4000)


        //Lock Nav Bar
        cy.get("#nav").trigger('mouseover')
        cy.get("#pinButton").wait(2000).click() //lock navbar
        cy.wait(4000)
        cy.get("#nav").trigger('mouseover')
        cy.get("#pinButton").wait(2000).click() //unlock navbar


        //Background Theme
        cy.get("#nav").trigger('mouseover')
        cy.get("#colorButton").trigger('mouseover').wait(2000).click()  //dark theme
        cy.wait(3000)
        cy.get("#nav").trigger('mouseover')
        cy.get("#colorButton").trigger('mouseover').wait(2000).click().trigger('mouseout')


        // cy.get("#nav").trigger('mouseover')
        cy.get("[href='/dashboards']").click()

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()
        
    })
})