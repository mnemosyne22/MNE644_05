/*eslint-env browser*/

//STEP 1 ... See index.html


//STEP 2 ... See index.html


//STEP 3 ... See index.html


//STEP 4 ... See index.html


//STEP 5 ... See index.html


//STEP 6 ... See index.html


//STEP 7
window.addEventListener("load", function () {
    var button7 = document.getElementById("step7Button");
    button7.addEventListener("click", function() {
        var yourOutlook = document.getElementById("Outlook").value;
        window.alert(yourOutlook);
        button7.disabled = true;
    });
});


//STEP 8
window.addEventListener("load", function () {
    "use strict";
    var newWindow, button8;
    button8 = document.getElementById("step8Button");
    button8.addEventListener("click", function () {
        newWindow = window.open("newpage.html", "width = 300, height = 300");
        newWindow.addEventListener("load", function () {
            newWindow.focus();
            newWindow.resizeTo(500, 300);
        });
    });
}); 

//STEP 9
window.addEventListener("load", function () {
    "use strict";
    var start, stop, msg, run;
    
    msg = function () {
        window.console.log("Learning JavaScript is fun!");
    }
    run = function() {
        setInterval(msg, 2000);
    }
    start = document.getElementById("step9Start");
    start.addEventListener("click", run);

    stop = document.getElementById("step9Stop");
    stop.addEventListener("click", function(){
        clearInterval(run);
    });
});

//STEP 10
window.addEventListener("load", function () {
    var myButton = document.getElementById("step10Button");
    myButton.addEventListener("click", function() {
        var mySelection = document.getElementById("selections").value;
        window.alert(mySelection);
    });                    
});