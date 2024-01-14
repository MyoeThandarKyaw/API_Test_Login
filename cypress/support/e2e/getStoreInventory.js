describe('PetStore API Testing', () => {
    it('Get Store Inventory - GET', () => {
        // request to URL
        cy.request('/store/inventory')
            .as('getInventory');
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })
})