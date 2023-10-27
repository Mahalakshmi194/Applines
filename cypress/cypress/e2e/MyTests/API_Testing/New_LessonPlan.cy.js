describe("CRUD Operations on lesson plan",()=>{
    it.skip("POST Method",()=>{
        // Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
        cy.wait(3000)

        //API TESTING - POST
        cy.request({
            method:'POST',
            url:'https://dev02.speechpundit.com/api/lessons/lesson_plan/',
            headers:{Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'},
            body:{
                title:'My New Speech',
                level:'Advanced',
                intro:'Good Morning',
                closing:'Thanks',
                speechTime:'5',
                keypoints: [{description: "<p>hello world</p>"}]

            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property("title","My New Speech")
            expect(response.body.keypoints[0]).to.have.property("description","<p>hello world</p>")
        })
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
        cy.wait(3000)
    })
    it.skip("Get Method",()=>{
        // Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
        cy.wait(3000)

        cy.request({
            method:'GET',
            url:'https://dev02.speechpundit.com/api/lessons/lesson_plan_list/',
            headers:{Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'},
        })
        .then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body[1]).to.have.property("title","Movies")
        })
    })

    it.skip("PUT Method",()=>{
        // Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
        cy.wait(4000)

        cy.request({
            method:'PUT',
            url:'https://dev02.speechpundit.com/api/lessons/lesson_plan/1080/',
            headers:{Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'},
            body:{
                id:1080,
                title:"Updated New Speech",
                level:"Beginner",
                intro:'<p>Good Afternoon</p>',
                closing:'<p>Thanks</p>',
                speechTime:4,
                keypoints: [{description: "<p>hello Hema</p>",id:1169, isDeleted: false}]

            }
        })
        .then((response)=>{
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("title","Updated New Speech")
            expect(response.body.keypoints[0]).to.have.property("description","<p>hello Hema</p>")
        })

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
        cy.wait(4000)
    })

    it.skip("DELETE Method",()=>{
        // Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()

        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click()
        cy.wait(3000)

        cy.request({
            method:'DELETE',
            url:'https://dev02.speechpundit.com/api/lessons/lesson_plan/1080/',
            headers:{Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'}
        })
        .then((response)=>{
            expect(response.status).to.eq(204)
        })
        cy.get("#nav").trigger("mouseover").wait(2000)
        cy.get("#menu >li").eq(6).click().wait(1000)
        cy.get("[href='/user/lessonplan']").click().trigger('mouseout')
    })
})