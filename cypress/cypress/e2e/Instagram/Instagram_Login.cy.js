
describe("Instagram",()=>{
    it("test case- Login page",()=>{
        cy.visit("https://www.instagram.com/")
        cy.get('.x1q0g3np.x1oa3qoh > :nth-child(1) > .x1i10hfl').click()
        cy.get("[name='username']").type("hemaha194")
        cy.get("[name='password']").type("A.n.t.p.143")
        cy.get("[type='submit']").click()
    })

    it("test case - Home",()=>{
        cy.visit("https://www.instagram.com/hemaha194/")
        cy.wait(4000)
        cy.get(".x9jhf4c").click()
        cy.get("._acay > :nth_child(2) li")
    })
})