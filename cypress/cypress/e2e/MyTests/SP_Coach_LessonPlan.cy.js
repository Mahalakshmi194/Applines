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
        cy.get("[href='/user/lessonplan']").click()
        cy.get(".lesson-plan-head >div").eq(1).find("button").click()
        cy.get("#validationStandard01").type("Human Emotions").wait(2000)
        cy.get("form >button").eq(0).should("contain","Yes").click()

        cy.get("textarea").type("Life would be dreary without feelings like joy and sorrow, excitement and disappointment, love and fear, hope and dismay. Emotion adds colour and spice to life. Emotions are feelings such as happiness, disappointment and sorrow that generally have both physiological and cognitive elements that influence behaviour.")
        cy.wait(5000)
        cy.get("select").select("Advanced")
        cy.wait(2000)
        cy.get("form >div").eq(3).find("button").click()
        cy.wait(30000)

        cy.get("#validationStandard03").type("5")
        cy.wait(2000)
        cy.get("[style='margin: 20px 15px 0px 0px; float: right;']").click()
        cy.wait(4000)


        //log Out
        cy.get("#nav").trigger('mouseover').wait(2000)
        cy.get(".user-container").click().wait(2000)
        cy.get("[href='/login']").click()
        


        

    })
})