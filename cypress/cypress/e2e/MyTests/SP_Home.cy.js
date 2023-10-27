describe("Speech Pundit Home Page",()=>{
    it("Test case-Home Page",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get("[href='/landing-page']").contains("Home").click()

        // cy.scrollTo("bottom")  //Go to bottom of the page

        cy.scrollTo(0,1000)  //Moving from 0th position height to 1000px height


    })
})