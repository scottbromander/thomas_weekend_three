/**
 * Created by Thomas on 10/30/15.
 */
$(document).ready(function(){

    $("#getData").on('click', clickGetData);
    $("#postData").on('click', clickPostData);

    //$("#add").on('click', selectFunction);
    //$("#subtract").on('click', selectFunction);
    //$("#multiply").on('click', selectFunction);
    //$("#divide").on('click', selectFunction);


});

function clickGetData(){
    $.ajax({
        type: "GET",
        url: "/data",
        success: function(data){
            console.log(data);
        }
    });
}


function clickPostData() {

    var mathFunctions = ["Add", "Subtract", "Multiply", "Divide"]
    var mathProblem = {};  //mathProblem is the object containing data(x,y) and type"Add,Subtract,Multiply,Divide"
    //var output = 0;
    $.each($("#inputForm").serializeArray(), function (i, field) {
        mathProblem[field.name] = field.value;
        mathProblem["type"] = "Add";
    });


    $.ajax({
        type: "POST",
        url: "/data",
        data: mathProblem,
        beforeSend: function () {
            //You can see in the console log that they xInput and yInput are leaving the client as
            //strings. Which is exactly how I would do it, we just need to keep that in mind on
            //the server side! We will need to convert them!
            console.log("HERE IS THE DATA:", mathProblem);
        },
        success: function (data) {
            console.log(data);
            //$("#output").append(output);
        }
    });

    //function selectFunction() {
    //    for (var i = 0; i < mathFunctions.length; i++) {
    //        mathProblem["type"] = mathFunctions[0];
    //        mathProblem["type"] = mathFunctions[1];
    //        mathProblem["type"] = mathFunctions[2];
    //        mathProblem["type"] = mathFunctions[3];
    //
    //        console.log("here it is", mathProblem);
    //    }
    //}
}

//    switch ("type") {
//        case "#add":
//            "Add";
//            break;
//case "#subtract":
//    mathProblem["type"] = "Subtract";
//    break;
//case "multiply":
//    mathProblem["type"] = "Multiply";
//    break;
//case "divide":
//    mathProblem["type"] = "Divide";
//    break;
//        default:
//            "Can not solve this problem";
//    }
//}