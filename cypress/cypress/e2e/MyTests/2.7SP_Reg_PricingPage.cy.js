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

                //Pricing page
                cy.get("[href='/pricing/all']").click()
                cy.get(2000)
               
            })
        })
    })
})