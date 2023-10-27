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

        //Create Groups
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("[href='/user']").click().wait(1000)
        cy.get("[href='/user/groups']").click()
        cy.get("#nav").trigger("mouseout").wait(2000)
        cy.get(".new-group-btn").click()

        cy.get("#formHorizontalName").type("Oranges")

        cy.get("#formHorizontalLevel").select("Beginner")

        cy.get(".g-3 >div").eq(2).find(".col-sm-10 >div").eq(0).find(".react-datepicker__input-container").find("input").click()
        cy.wait(2000)
        cy.get(".react-datepicker__time-list >li").eq(34).click()

        cy.get(".g-3 >div").eq(3).find(".col-sm-10 >div").eq(0).find(".react-datepicker__input-container").find("input").click()
        cy.wait(2000)
        cy.get(".react-datepicker__time-list >li").eq(39).click()

        cy.get("#Mon").click()
        cy.get("#Tue").click()
        cy.get("#Wed").click()
        cy.get("#Thu").click()
        cy.get("#Fri").click()
        cy.get("#Sat").click()

        cy.get("#startDate").type("2023-10-01")

        cy.get("#enddate").type("2023-10-30")

        cy.get("form >button").click()


        //Log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()
       
    })
})