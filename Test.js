/*
 Task description
 You have an array of objects in JavaScript.
 Each one contains a name (a string) and age (a number).
 Write a function which returns the objects ordered by age. */

//function for compare
function compareByAge (obj1, obj2) {
    return obj1.age - obj2.age;
}

//example array
var exampleArr = [  { name: "str5", age: 55 },
                    { name: "str4", age: 23 },
                    { name: "str6", age: 75 },
                    { name: "str1", age: 1 },
                    { name: "str3", age: 12 },
                    { name: "str2", age: 4 }] ;


//finction to show sorted example
function showArray() {
    exampleArr.sort(compareByAge);
    var sortedArr = "";
    var result = document.getElementById('result');
    for(var i = 0; i < exampleArr.length; i++) {
       sortedArr = sortedArr + '{name: '+ exampleArr[i].name + ', age: '+ exampleArr[i].age + '} '
    }
    result.innerHTML = "[" +sortedArr+ "]";
}
