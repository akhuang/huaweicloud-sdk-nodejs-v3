var signer = require('./signer');
var https = require("https");
var sig = new signer.Signer();
//Set the AK/SK to sign and authenticate the request.
sig.Key = process.env.AK;
sig.Secret = process.env.SK;

//The following example shows how to set the request URL and parameters to query a VPC list.
//Specify a request method, such as GET, PUT, POST, DELETE, HEAD, and PATCH.
//Set request host.
//Set request URI.
//Set parameters for the request URL.
var r = new signer.HttpRequest("GET", "vpc.cn-east-3.myhuaweicloud.com/v1/086cc9ecba00267b2f36c00e44e5db7b/vpcs");
//Add header parameters, for example, x-domain-id for invoking a global service and x-project-id for invoking a project-level service.
r.headers = {"Content-Type": "application/json"};
//Add a body if you have specified the PUT or POST method. Special characters, such as the double quotation mark ("), contained in the body must be escaped.
r.body = '';

var opt = sig.Sign(r);
console.log(opt.headers["X-Sdk-Date"]);
console.log(opt.headers["Authorization"]);

var req = https.request(opt, function (res) {
    console.log(res.statusCode);
    console.log('headers:', JSON.stringify(res.headers));
    res.on("data", function (chunk) {
        console.log(chunk.toString())
    })
});

req.on("error", function (err) {
    console.log(err.message)
});
req.write(r.body);
req.end();
