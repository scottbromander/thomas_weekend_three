/**
 * Created by Thomas on 10/30/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var output = 0;

var index = require('./routes/index');

app.set("port", process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

//app.use('/', index);

app.get("/*", function(req,res,next){
    var file = req.params[0] || "/index.html";
    //console.log(__dirname);
    //console.log(file);
    res.sendFile(path.join(__dirname, "./public/", file));

});

app.post('/data', function(request, response){
        console.log(request.body.xInput, request.body.yInput,request.body.type);
        //console.log('were on server');
        //response.send("Hello");
        // ** SCOTT ADDED
        // Took the output that you were sending back and created it as a variable here. Then
        // set it equal to your functions return.
        var output = mathCalculations(request.body.xInput, request.body.yInput,request.body.type);
        // **

        // Added a 'key' to your key / value pair for your response send back.
    response.send({value: output});
    });



app.listen(app.get("port"), function(){
    console.log("So Far So Good" + app.get('port'));
});

function mathCalculations(xInput, yInput, type) {
    //Here we will need to convert xInput and yInput to numbers, as they came from the client as
    //strings and now will need to be numbers.

    xInput = parseInt(xInput);
    yInput = parseInt(yInput);

    switch (type) {
        case "Add":
            output = xInput + yInput;
            console.log("add");
            console.log(output);
            break;
        case "Subtract":
            //type:
            output = xInput - yInput;

            break;
        case "Multiply":
            //type:
            output = xInput * yInput;
            break;
        case "Divide":
            //type:
            output = xInput / yInput;
            break;
        default:
            text = "?"
    }

    // ** SCOTT ADDED
    // Just took your code and RETURNED the output you created, that way, we could set a value
    // with this function.
    return output;
    // **
}