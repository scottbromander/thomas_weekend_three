/**
 * Created by Thomas on 10/30/15.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

//router.route('/data')
//    .get(function(request, response){
//        response.send("Hello");
//    })
//    .post(function(request, response){
//        console.log(request.body.valueInput);
//        response.send({message: "Hello" + request.body.valueInput});
//    });

//router.get("/*", function(request, response){
//    var file = request.params[0] || "index.html";
//    response.sendFile(path.join(__dirname, "..public", file));
//

module.exports = router;