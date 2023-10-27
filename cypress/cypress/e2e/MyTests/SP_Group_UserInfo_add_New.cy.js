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

        cy.get('#controlled-tab-example-tab-newstudent').click()
        cy.get("#registerForm >div").eq(0).find(".col-lg-6").find("[name='firstName']").type("Srii")
        cy.get("#registerForm >div").eq(0).find(".col-lg-6").find("[name='lastName']").type("S")
        cy.get("#registerForm >div").eq(1).find(".col-lg-6").find("[name='email']").type("hema.pantham+student3@gmail.com")
        cy.get("#registerForm >div").eq(1).find(".col-lg-6").find("[name='age']").type("21")
        cy.get('[style="display: flex; justify-content: flex-end; margin-top: 15px;"] > .btn').click()
        cy.wait(3000)

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()

        

    })
})