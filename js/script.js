
var inputWithListOfPairs = document.getElementById("NameValuePairList"); 

let listOfPairs = new Array();


function AddPair(){
    
    let name = document.getElementById("NameValuePair").value.split('=')[0];
    let value = document.getElementById("NameValuePair").value.split('=')[1];

    var Pair = {
        name: name,
        value: value
    }

    listOfPairs.push(Pair);
    console.log(listOfPairs);
    //inputWithListOfPairs.value = listOfPairs;

    listOfPairs.forEach(function(element){
        console.log(element);
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<span>" + element.name + " = " + element.value + "</span>";
        console.log(newDiv);
        inputWithListOfPairs.appendChild(newDiv);
        
    })
}

var DivWithAllPairs = document.getElementById("NameValuePairList");
var DivWithOnePair = DivWithAllPairs.getElementsByTagName('div');

function SortByName(){
    listOfPairs.sort(dynamicSort("name"));
    console.log(listOfPairs);   
}

function SortByValue(){
    listOfPairs.sort(dynamicSort("name"));
    console.log(listOfPairs);   
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
         * and you may want to customize it to your needs
         */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}