describe("API Testing",()=>{
    it("Get Method",()=>{
        //Login
        cy.visit("https://dev02.speechpundit.com/landing-page")
        cy.wait(5000)
        cy.get('[href="/login"]').click()
        cy.get('[name="email"]').type("hema.pantham+coach1@applines.com")
        cy.get('[name="password"]').type("asdf1234")
        cy.get('[style="text-align: center;"] > .btn').click()
 

        //Cypress API Testing
        cy.request({
            method:'POST',
            url:'https://dev02.speechpundit.com/api/auth/signin/',
            body:{
                email: "hema.pantham+coach1@applines.com",
                password: "asdf1234"
            }
        })
        .then((response)=>{
            console.log(response)
            expect(response.status).to.eq(200)

            expect(response.body.firstName).to.eq("Hema")
            expect(response.body.email).to.eq("hema.pantham+coach1@applines.com")
            expect(response.body.token).to.eq("deae6598e2993a5d9d8b550b43398f46f29c4647")

            expect(response.body.profile.id).to.eq(7140)
            expect(response.body.profile.subscribed).to.eq(true)
            expect(response.body.profile).to.have.property("subscriptionStartTime", "2023-09-26T06:01:51Z")
            expect(response.body.profile).to.have.property("subscriptionEndTime", "2023-10-25T06:01:51Z")
            expect(response.body.profile).to.have.property("plan", "PersonalCouponCode100PercentOffOneTime")
            expect(response.body.profile).to.have.property("paymentCompleted", false)

            expect(response.headers).to.have.property("content-length" ,"2434")
            expect(response.headers).to.have.property("content-type" ,"application/json")
            expect(response.headers).to.have.property("x-amzn-trace-id","Root=1-00000000-000000000000000000000000")
            expect(response.headers).to.have.property("x-content-type-options" , "nosniff")


        })
    })
})