var inputWithPair = document.getElementById("NameValuePair");
var inputWithListOfPairs = document.getElementById("NameValuePairList"); 

let listOfPairs = new Array();

function AddPair(){
    listOfPairs.push(inputWithPair.value);
    console.log(listOfPairs);
    inputWithListOfPairs.value = listOfPairs;
}