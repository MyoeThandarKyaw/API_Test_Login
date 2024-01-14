describe('PetStore API Testing - Create User - POST', () => {

    beforeEach(() => {
        // request to URL
        // add request body
        let body = {
            "id": 123,
            "username": "Fatima123",
            "firstName": "Fatima",
            "lastName": "Zza",
            "email": "fatima@mail.com",
            "password": "Pass123",
            "phone": "081234567890",
            "userStatus": 0
        }
        console.log(body)
        // request to URL
        cy.request('POST', '/user', body)
            .as('createUser');
    })

    it('Validate Status Code should be 200', () => {
        // assertion
        cy.get('@createUser').then(user => {
            expect(user.status).to.equal(200);
        })
    })

    it('Validate Response Header', () => {
        // assertion
        cy.get('@createUser').then(user => {
            expect(user).to.have.property('headers');
            expect(user.headers['content-type']).to.equal('application/json');
        })
    })

    it('Validate Response Body', () => {
        // assertion
        cy.get('@createUser').then(user => {
            expect(user).to.be.an('object');
        })
    })

    it('Validate Response Body Object should have correct Property & Value', () => {
        // assertion
        cy.get('@createUser').then(user => {
            expect(user.body).to.haveOwnProperty('code');
            expect(user.body).to.haveOwnProperty('type');
            expect(user.body).to.haveOwnProperty('message');
            expect(user.body.code).to.be.a('number');
            expect(user.body.type).to.equal('unknown');
            expect(user.body.message).lengthOf.greaterThan(2);
        })
    })
})
