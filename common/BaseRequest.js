const {RequestPromise} = require ('../common/RequestPromise');
const data = require('../resources/commonData.json');


const apiCall = (_testData, _method, _body) =>{
   return new Promise( (resolve, reject, body) => {
        var options = {
            headers: {
                'Content-Type': data.ContentType,
                'Authorization': data.BearerToken,
              },
            method: _method,
            uri: _testData,
            time:true,
            resolveWithFullResponse: true,
            body: JSON.stringify(_body)
        };


        RequestPromise( options )
        .then(function (response) {
            resolve(response);
        })
        .catch(function(err){
            var respErr  = JSON.parse(err.error);
            var errorResult = {
                statusCode: respErr.StatusCodeError,
                body: err.error
            };
            resolve(errorResult);
        })
        .catch(function(err){
            console.error(err);
        });
    });
};

module.exports = apiCall;