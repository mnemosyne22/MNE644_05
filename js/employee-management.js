/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// EMPLOYEE DATA

employees = [
        { name: "Sally Smith", title: "Quality Assurance", extention: 3423 },
        { name: "Mark Martin", title: "VP Sales", extention: 3346 },
        { name: "Jared Jolly", title: "Human Resources", extention: 3317 },
        { name: "John Johnson", title: "Marketing", extention: 3232 },
        { name: "Zak Rubalcava", title: "IT", extention: 3287 }
    ];

// FUNCTION - add()
    
var add = function () {
    var name, title, extention, record, employee;
    
    name = $("name").value;
    title = $("title").value;
    extention = $("extention").value;
    employee = {name: "", title: "", extention: 0};

// TABLE
    
    rows = "";
    
// BUTTON
    
    button = "<button id='removeBtn' onclick='remove()' value='remove'>Remove</button>";
    
// DISPLAY EMPLOYEE INFO IN ROWS
    
    for (i = 0; i < employees.length; i += 1) {
        record = "<tr><td>" + employees[i].name + "</td><td>" + employees[i].title + "</td><td>" + employees[i].extention + "</td><td>" + button + "</td><tr>";
        rows += record;
    }

    // DISPLAY TABLE
    
    $("table").innerHTML = rows;

// ADD EVENT LISTENERS
    
    $("addBtn").addEventListener("click", add);
    $("removeBtn").addEventListener("click", remove);
    
};