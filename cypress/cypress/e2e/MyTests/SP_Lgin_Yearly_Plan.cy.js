describe("Speech Pundit",()=>{
    it("test case-1 Login and Buy Plan for Yearly",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+student2@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(3000)


        //Buy Plan for Yearly
        cy.get("[href='/pricing/cart/']").click()
        cy.wait(2000)
        cy.get('.form-select').select(2)
        cy.get(".purchase-btn").click()
        
        cy.get("#cardNumber").type("4242 4242 4242 4242")
        cy.get("#cardExpiry").type("08/02")
        cy.get("#cardCvc").type("123")
        cy.get("#billingName").type("P.H.K.Maha Lakshmi")
        cy.get(".SubmitButton-IconContainer").click()
    
    })
})