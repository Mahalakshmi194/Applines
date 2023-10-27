describe("Speech Pundit",()=>{
    it("test case-1 Dash Board",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+student1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
        cy.wait(4000)

        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get("[href='/activity']").click().trigger('mouseout').wait(3000)

        //Edit
        cy.get('.activity-body >div').eq(0).find('div').find('div >div').eq(1).find('div').find('div >.col >button').eq(0).click()
        cy.get('.activity-body >div').eq(0).find('div').find('div >div').eq(1).find('div').find('div >div').eq(0).find('input').wait(1000).clear().type("Video").wait(2000)
        cy.get('.activity-body >div').eq(0).find('div').find('div >div').eq(1).find('div').find('div >div').eq(0).find('input').type('{enter}')



    })


})