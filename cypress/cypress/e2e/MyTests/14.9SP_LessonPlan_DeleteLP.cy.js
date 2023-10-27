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

        //Lesson Plan
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
       
        cy.get('.lesson-plan-details >div').eq(5).find('.lesson-plan-buttons >button').eq(2).click()       

                

    })
})