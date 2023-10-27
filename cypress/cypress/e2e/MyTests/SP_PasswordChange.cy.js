
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
        // cy.get("[placeholder='Name']").type("Hema")
        // cy.get("[placeholder='Username']").type("Pantham")
        // cy.get("[placeholder='Phone']").type("7286023194")
        cy.get("[type='button']").contains("Change Password").click()
        cy.get('[name="oldPassword"]').type("Asdf@@1234")
        cy.get('[name="newPassword"]').type("Asdf@1234")
        cy.get('[name="confirmPassword"]').type("Asdf@1234")
        cy.wait(3000)
        cy.get('#changePasswordForm > .btn').click()
        cy.get(4000)

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()
       
    })
})