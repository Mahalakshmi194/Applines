describe("Speech Pundit",()=>{
    it("test case-1 Login and Buy Plan for monthly",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hemaha194+student1@gmail.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        //Answering to the questions
        cy.wait(1000)
        cy.get(".input").type("Hema")
        cy.get(".btn").click()

        cy.wait(1000)
        cy.get("[value='yes']").click()
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("[value='Neutral']").click()
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("[value='yes']").click()
        cy.get('.next-sub-btn').click()

        cy.wait(1000)
        cy.get("[value='Neutral']").click()
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("[value='Neutral']").click()
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get(':nth-child(3) > .checkbox-input').click()
        cy.get(':nth-child(4) > .checkbox-input').click()
        cy.get(':nth-child(5) > .checkbox-input').click()
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("[value='Neutral']").click()
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("textarea").type("Self confidence and always make myself to be happy without disturbing others")
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("textarea").type("Proper communication")
        cy.get(".next-sub-btn").click()

        cy.wait(1000)
        cy.get("[href='/dashboards/practice']").click()

        //User can see the coach details in groups
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("[href='/user']").click().wait(1000)
        cy.get("[href='/user/groups']").click()
        cy.get("#nav").trigger("mouseout").wait(2000)
        cy.wait(4000)

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()



    })
})