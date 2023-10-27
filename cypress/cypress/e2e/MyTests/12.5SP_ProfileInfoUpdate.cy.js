
describe("Speech pundit",()=>{
    it("test case- Change Password",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham@applines.com")
        cy.get('[name="password"]').type("Asdf@1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)

        //profile Update
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/user-profile']").click()
        cy.get("[placeholder='Name']").wait(1000).clear().wait(1000).type("Hema").wait(2000)
        cy.get("[placeholder='Username']").wait(1000).clear().wait(1000).type("Pantham").wait(2000)
        cy.get("[placeholder='Phone']").wait(1000).clear().wait(1000).type("7286023194").wait(200)
        cy.wait(3000)
        cy.get('.btn').contains("Update").click()
        cy.get(4000)

       
    })
})