describe("API Testing",()=>{
    it("Get Method",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click()
         

        // Cypress API Testing
        cy.request({
            method:'GET',
            url:'https://dev02.speechpundit.com/api/lessons/lesson_plan_list/',
            headers:{
                Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[0]).to.have.property("title","Environment")
            expect(response.body[0]).to.have.property("level", "Beginner")
            expect(response.body[0]).to.have.property("speechTime", 3)
            expect(response.body[0]).to.have.property("createdAt", "2023-09-26T11:23:22Z")
            expect(response.body[0].keypoints[0]).to.have.property("id", 1088)
        })

    })


    it("PUT Method",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click()
        cy.get(':nth-child(1) > .lesson-plan-buttons > :nth-child(1)').click()
        cy.get('form > .btn').click()


        //Cypress API Testing
        cy.request({
                method:'PUT',
                url:'https://dev02.speechpundit.com/api/lessons/lesson_plan/1027/',
                headers:{
                    Authorization:"Token deae6598e2993a5d9d8b550b43398f46f29c4647",
                },
                body:{
                    id: 1027,
                    title:"Environment", 
                    level:"Advanced",
                    speechTime:3,
                    intro:"",
                    closing:"",
                    id:1027,
                    intro:"",
                    keypoints:[{description: "<p>The natural environment is the source of life for everyone. It plays a crucial role in directing and determining the proper growth and development of individuals. The quality of our life, be it good or bad, is highly dependent on the quality of our natural surroundings. Our basic needs for food, water, shelter, and other essentials are all met by the environment around us. Therefore, it is essential to protect and preserve our natural environment to ensure a sustainable and fulfilling life for present and future generations.The natural environment is the source of life for everyone. It plays a crucial role in directing and determining the proper growth and development of individuals. The quality of our life, be it good or bad, is highly dependent on the quality of our natural surroundings. Our basic needs for food, water, shelter, and other essentials are all met by the environment around us. Therefore, it is essential to protect and preserve our natural environment to ensure a sustainable and fulfilling life for present and future generations.The Natural environment is the source of life for everyone. It plays a crucial role in directing and determining the proper growth and development of individuals. The quality of our life, be it good or bad, is highly dependent on the quality of our natural surroundings. Our basic needs for food, water, shelter, and other essentials are all met by the environment around us. Therefore, it is essential to protect and preserve our natural environment to ensure a sustainable and fulfilling life for present and future generations.</p>",id:1088, isDeleted: false}]
                    
                }
            })
            .then((response)=>{
                console.log(response)
                expect(response.status).to.eq(201)
                expect(response.body.title).to.eq("Environment")
    
                expect(response.body.id).to.eq(1027)
                expect(response.body.keypoints[0]).to.have.property("description", "<p>The natural environment is the source of life for everyone. It plays a crucial role in directing and determining the proper growth and development of individuals. The quality of our life, be it good or bad, is highly dependent on the quality of our natural surroundings. Our basic needs for food, water, shelter, and other essentials are all met by the environment around us. Therefore, it is essential to protect and preserve our natural environment to ensure a sustainable and fulfilling life for present and future generations.The natural environment is the source of life for everyone. It plays a crucial role in directing and determining the proper growth and development of individuals. The quality of our life, be it good or bad, is highly dependent on the quality of our natural surroundings. Our basic needs for food, water, shelter, and other essentials are all met by the environment around us. Therefore, it is essential to protect and preserve our natural environment to ensure a sustainable and fulfilling life for present and future generations.The Natural environment is the source of life for everyone. It plays a crucial role in directing and determining the proper growth and development of individuals. The quality of our life, be it good or bad, is highly dependent on the quality of our natural surroundings. Our basic needs for food, water, shelter, and other essentials are all met by the environment around us. Therefore, it is essential to protect and preserve our natural environment to ensure a sustainable and fulfilling life for present and future generations.</p>")
    
    
        })
    })

    it.only("DELETE Method",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click()
        // cy.get(':nth-child(1) > .lesson-plan-buttons > :nth-child(1)').click()
        // cy.get('form > .btn').click()


        //Cypress API Testing
        cy.request({
                method:'DELETE',
                url:'https://dev02.speechpundit.com/api/lessons/lesson_plan/1068/',
                headers:{
                    Authorization:"Token deae6598e2993a5d9d8b550b43398f46f29c4647",
                },
            })
            .then((response)=>{
                console.log(response)
                expect(response.status).to.eq(204)
    
        })
    })
})