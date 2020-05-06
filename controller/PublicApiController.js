const apiCall = require ('../common/BaseRequest');
const data = require('../resources/commonData.json');
const fs = require('fs');
const rnd = require('../common/randomIds');

const getUsersController = async() =>{
    var testData = data.BaseURL + 'users';
    var method = "GET"        
    var userResponse = await apiCall(testData, method);

    return {
        status: userResponse.statusCode,
        body: JSON.parse(userResponse.body)}
};

const getUsersWithNameController = async(filter) =>{
    var testData = data.BaseURL + 
    'users?first_name=' + filter;
    var method = "GET"        
    var userResponse = await apiCall(testData, method);

    return {
        status: userResponse.statusCode,
        body: JSON.parse(userResponse.body)}
};

const postCreateUserController = async(body) =>{
    var testData = data.BaseURL + 'users';
    var method = "POST"        
    var userResponse = await apiCall(testData, method, body);

    return {
        status: userResponse.statusCode,
        body: JSON.parse(userResponse.body)}
};

const createRandomUser = async() =>{
    const userJson = fs.readFileSync('./json-models/createUserDTO.json')
    const userDTO = JSON.parse(userJson)
    userDTO.first_name = rnd.rndIdNumber();
    userDTO.last_name = rnd.rndIdNumber();
    userDTO.email = rnd.rndIdNumber() + "@fakemail.com";
    var userResponse =  await postCreateUserController(userDTO);
    var apiData = {
        status: userResponse.statusCode,
        body: JSON.parse(userResponse.body)}
    return apiData;
};

module.exports = {
    getUsersController, 
    getUsersWithNameController, 
    postCreateUserController,
    createRandomUser
};