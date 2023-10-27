describe("Speech Pundit",()=>{
    it.only("test case- Buy plan monthly for Coach",()=>{
        describe("Speech Pundit",()=>{
            it("test case-1 Login and Buy Plan for monthly",()=>{
                //Login
                cy.visit("https://dev02.speechpundit.com/landing-page")
                cy.wait(5000)
                cy.get('[href="/login"]').click()
                cy.get('[name="email"]').type("hema.pantham+student50@applines.com")
                cy.get('[name="password"]').type("asdf1234")
                cy.get('[style="text-align: center;"] > .btn').click()
                cy.wait(3000)

                //Buy plan for monthly
                cy.get("[href='/pricing/cart/']").click()
                cy.get(2000)
                cy.get(".form-select").select("Monthly").wait(2000)
                cy.get("#value").type("NSF2023")
                cy.get(".apply-coupon-btn").click().wait(1000)
                cy.get(".complete-reg-btn").click()

                cy.get(".input").type("Hema")
                cy.get(".btn").click()

                cy.get("[value='yes']").click()
                cy.get(".next-sub-btn").click()

                cy.get("[value='Neutral']").click()
                cy.get(".next-sub-btn").click()

                cy.get("[value='yes']").click()
                cy.get('.next-sub-btn').click()

                cy.get("[value='Neutral']").click()
                cy.get(".next-sub-btn").click()

                cy.get("[value='Neutral']").click()
                cy.get(".next-sub-btn").click()

                cy.get(':nth-child(3) > .checkbox-input').click()
                cy.get(':nth-child(4) > .checkbox-input').click()
                cy.get(':nth-child(5) > .checkbox-input').click()
                cy.get(".next-sub-btn").click()

                cy.get("[value='Neutral']").click()
                cy.get(".next-sub-btn").click()

                cy.get("textarea").type("Self confidence and always make myself to be happy without disturbing others")
                cy.get(".next-sub-btn").click()

                cy.get("textarea").type("Proper communication")
                cy.get(".next-sub-btn").click()

                cy.get("[href='/dashboards/practice']").click()
                cy.wait(4000)

                //log Out
                cy.get("#nav").trigger('mouseover').wait(2000)
                cy.get(".user-container").click().wait(2000)
                cy.get("[href='/login']").click()
     
        
            })
        })
    })
})