describe("CRUD Operations on Group",()=>{
    it("POST",()=>{
        cy.request({
            method:'POST',
            url:'https://dev02.speechpundit.com/api/class/',
            headers:{Authorization:'Token deae6598e2993a5d9d8b550b43398f46f29c4647'},
            body:{
                duration:29,
                endDate:'2023-10-18',
                endTime:'09:45:AM',
                id:null,
                level:'Advanced',
                name:'CSE',
                recurrence:'0000100',   
                startDate:'2023-10-14',   
                startTime:'09:15:AM',    
                timeZone:'Asia/Calcutta'
            }
        })
        .then((response)=>{
            console.log(response)
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property("name","CSE")
            expect(response.body).to.have.property("level","Advanced")
            expect(response.body).to.have.property("startTime","09:15:AM")
            expect(response.body).to.have.property("endTime", "09:45:AM",)
            expect(response.body).to.have.property("startDate", "2023-10-14",)
            expect(response.body).to.have.property("endDate", "2023-10-18")

            expect(response.body.coach).to.have.property("firstName", "Hema")
            expect(response.body.coach).to.have.property("lastName", "Pantham")
            expect(response.body.coach).to.have.property("isActive", true)

            expect(response.body.coach.profile).to.have.property("subscribed", true)
            expect(response.body.coach.profile).to.have.property("emailVerified",true)
            
        })
    })
})