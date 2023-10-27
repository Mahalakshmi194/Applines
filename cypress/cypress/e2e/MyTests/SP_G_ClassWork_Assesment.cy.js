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
        
        //goto Classwork
        cy.get("#controlled-tab-example-tab-classwork").click()
        cy.get('.col > .btn-icon').click( {force: true})
        cy.get("#formHorizontalLevel").select("1027")
        cy.get("#startdate").type("2023-09-28")
        cy.get("#enddate").type("2023-09-30")
        cy.get("#selectstudent").click()
        // cy.get(".p-multiselect-header >:nth-child(1)").click() //for selecting all students
        cy.get('.p-multiselect-items >li').eq(1).click()
        cy.get('.p-multiselect-close').click()
        cy.wait(2000)
        cy.get('#controlled-tab-example-tabpane-addassignment > form > .float-right').click()
        cy.wait(4000)

        

        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()

        

    })
})