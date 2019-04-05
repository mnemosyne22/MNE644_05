/* eslint-env browser */

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// FUNCTIONS

// ALL BUTTONS
function enter(event) { 
    "use strict";
    var btn, btnValue, result;
    
    btn = event.target;
    btnValue = btn.value;
    result = $("result").value;
    
    // UPDATE RESULT INPUT
    result += btnValue;
    $("result").value = result;
    
    return result;
}

// EQUALS BUTTON
function calculate() { 
    "use strict";
    var result, total;
    result = $("result").value;
    total = eval(result);
    $("result").value = total;
    return result;
}

function init() {
    "use strict";
    var buttons = document.querySelectorAll("input[type='button']");
    window.console.log(buttons);
    
    
    
// ADD EVENT LISTENERS
    buttons.forEach(function (button) {
        if (button.value !== "=" ) {
            button.addEventListener("click",enter);
        } else {
            button.addEventListener("click", calculate);
        }
        
    });
    
    
}
init();
