describe("CSS Selectors",()=>{
    it("css selectors",()=>{
        cy.visit("https://www.amazon.in/")

        cy.get("#twotabsearchtextbox").type("mobile") //id locator or selector
        
        cy.get("[type='submit']").click()  //Attribute locator
        
        cy.get(".a-size-medium-plus").contains("Results")  //class locator

        
    })
})