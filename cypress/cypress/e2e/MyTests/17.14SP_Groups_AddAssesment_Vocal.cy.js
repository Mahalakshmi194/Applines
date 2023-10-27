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

        cy.get("a").contains("APPLINES").click()
        cy.wait(2000)
        
        //goto Classwork
        cy.get("#controlled-tab-example-tab-classwork").click()
        cy.get('.col > .btn-icon').click( {force: true})
        cy.get('#controlled-tab-example-tab-vocalassignment').click()
        cy.get(".col-sm-10 >div").eq(1).find("label").find("input").click()
        cy.get('#controlled-tab-example-tabpane-vocalassignment').find("form").find(".g-3 >div").eq(1).find(".col-sm-10").find("#startdate").type("2023-09-27")
        cy.get("[placeholder='end date']").type("2023-09-29")
        cy.get('#controlled-tab-example-tabpane-vocalassignment').find("form").find(".g-3 >div").eq(3).find(".col-sm-10").find(".p-multiselect").click()
        // cy.get(".p-multiselect-header >:nth-child(1)").click() //for selecting all students
        cy.get('.p-multiselect-items >li').eq(0).should("contain","Hema Pantham").click()
        cy.get('.p-multiselect-close').click()
        cy.wait(2000)
        cy.get('#controlled-tab-example-tabpane-vocalassignment > form > .float-right').click()
        cy.wait(4000)


    })
})