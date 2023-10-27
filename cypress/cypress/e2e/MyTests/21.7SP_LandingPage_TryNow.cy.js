describe("Speech Pundit",()=>{
    it("Test case-Try Now ",()=>{
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get("[href='trynow']").wait(2000).click()
        cy.wait(2000)
        cy.get('[style="margin-top: 5%;"]').find(".g-2 >div").eq(3).find(".dcard >div").eq(4).trigger('mouseover').wait(3000)
        cy.wait(2000)
        cy.get(".btn").click().wait(4000)
        cy.get('[style="margin-right: 1%;"]').wait(2000).click()
        cy.get('.btn').click().wait(4000)
        cy.get('.btn > b').click().wait(2000)
        cy.go('back')
        cy.wait(2000)
        cy.go('back')

    })
})