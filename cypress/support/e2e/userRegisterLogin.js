describe('PetStore User API Testing', () => {
    it('Create a user - POST', () => {
        // add request body
        let body = {
            "id": 123,
            "username": Cypress.env('username'),
            "firstName": "Fatima",
            "lastName": "Zza",
            "email": "fatima@mail.com",
            "password": Cypress.env('password'),
            "phone": "081234567890",
            "userStatus": 0
        }
        console.log(body)
        // request to URL
        cy.request('POST', '/user', body)
            .as('createUser');
        // assertion
        cy.get('@createUser').then(user => {
            expect(user.status).to.equal(200);
        })
    })

    // add query parameters
    const loginUserOptions = {
        method: 'GET',
        url: '/user/login',
        qs: {
            username: Cypress.env('username'),
            password: Cypress.env('password')
        }
    }
    it('Login registered user - GET', () => {
        // request to URL
        cy.request(loginUserOptions).as('loginUser');
        // assertion
        cy.get('@loginUser').then(loggedUser => {
            expect(loggedUser.status).to.equal(200);
        })
    })
})