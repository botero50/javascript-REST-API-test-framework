#This framework is using gorest.co.in public APIs to test

## Setup
* Run `$ npm install`
* Run `$ npm install -g mocha`
* Run `$ npm i -g mochawesome`

## Get Bearer Token
* Create an user in the goretest page 'https://gorest.co.in/user/settings/api-access.html'
* Get the Bearer and the go resources commonData.json and add your bearer information with the format "bearer XXXXXXX" when XXXXXXX = bearer provided by the page

* Run Tests `$ npm test`
