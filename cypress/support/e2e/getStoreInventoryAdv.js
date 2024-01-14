describe('PetStore API Testing - Store Inventory - GET', () => {

    beforeEach(() => {
        // request to URL
        cy.request('/store/inventory').as('getInventory');
    })

    it('Validate Status Code should be 200', () => {
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
    })

    it('Validate Response Header', () => {
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory).to.have.property('headers');
            expect(inventory.headers['content-type']).to.equal('application/json');
        })
    })

    it('Validate Response Body', () => {
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory).to.be.an('object');
        })
    })

    it('Validate Response Body Object should have correct Property & Value', () => {
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory.body).to.haveOwnProperty('available');
            expect(inventory.body).to.haveOwnProperty('pending');
            expect(inventory.body.pending).to.be.a('number');
        })
    })

    it.skip('Validate Response Body Object - Skipped Test', () => {
        // assertion
        cy.get('@getInventory').then(inventory => {
            expect(inventory.body.available).to.equal(229);
        })
    })
})