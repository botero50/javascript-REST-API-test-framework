const fs = require('fs');
var expect = require('chai').expect;
var should = require('chai').should();
var userController= require('../controller/PublicApiController');
const rnd = require('../common/randomIds');

describe('This is the gorest.co.in user API test', function() {
this.timeout(30000);

    describe('test suite with the user testcases', function() {

        it('Verify if the User API can return the list of all users.', async function() {
            var userResponse =  await userController.getUsersController(); 

            expect(userResponse.status).to.equal(200);
            should.exist(userResponse.body.result)
        });

       it('Verify if the User API can return the list of users filtering by first_name', async function() {
            var userResponse =  await userController.getUsersWithNameController("a"); 

            expect(userResponse.status).to.equal(200);
            should.exist(userResponse.body.result)
        });

        it('Verify if a user can be created in the application', async function() {
            const userJson = fs.readFileSync('./json-models/createUserDTO.json')
            const userDTO = JSON.parse(userJson)
            userDTO.first_name = rnd.rndIdNumber();
            userDTO.last_name = userDTO.first_name
            userDTO.email =  "AB" + userDTO.first_name + "@fakemail.com";
            var userResponse =  await userController.postCreateUserController(userDTO);

            expect(userResponse.status).to.equal(200);
            should.exist(userResponse.body.result)

            var userResponse =  await userController.getUsersWithNameController(userDTO.first_name); 

            expect(userResponse.status).to.equal(200);
            should.exist(userResponse.body.result)
        });
    });
});



