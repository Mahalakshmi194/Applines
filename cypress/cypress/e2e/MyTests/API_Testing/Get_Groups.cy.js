describe("API Testing",()=>{
    it("Get Method",()=>{
        //Login
        // cy.visit("https://dev02.speechpundit.com/landing-page")
        // cy.wait(5000)
        // cy.get('[href="/login"]').click()
        // cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        // cy.get('[name="password"]').type("asdf1234")
        // cy.get('[style="text-align: center;"] > .btn').click()

        // cy.get("#nav").trigger("mouseover").wait(2000)
        // cy.get("[href='/user']").click().wait(1000)
        // cy.get("[href='/user/groups']").click()
        // cy.get("#nav").trigger("mouseout").wait(2000)
 

        //Cypress API Testing
        cy.request({
            method:'GET',
            url:'https://dev02.speechpundit.com/api/class/',
            headers:{Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'}
        })
        .then((response)=>{
            console.log(response)
            // console.log(len(response.body))
            expect(response.status).to.eq(200)

            expect(response.body[0]).to.have.property("id", 2164)
            expect(response.body[0]).to.have.property("name", "CSE-4E")
            expect(response.body[0]).to.have.property("startDate","2023-10-04")
            expect(response.body[0]).to.have.property("endDate","2023-10-31")
            expect(response.body[0]).to.have.property("startTime","08:30:00")
            expect(response.body[0]).to.have.property("endTime","17:00:00")

            expect(response.body[1]).to.have.property("id", 2165)
            expect(response.body[1]).to.have.property("name", "APPLINES")
            expect(response.body[1]).to.have.property("startDate","2023-10-01")
            expect(response.body[1]).to.have.property("endDate","2023-12-31")
            expect(response.body[1]).to.have.property("startTime","08:00:00")
            expect(response.body[1]).to.have.property("endTime","09:00:00")

            
        
        })
    })
})