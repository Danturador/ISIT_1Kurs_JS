function generateRandomNumber(max, min) {
    return Math.round(Math.random() * (max - min) + min);
}

document.write("<p>Задание 1<br>");
var sizeOfArray = generateRandomNumber(10, 1);
var array = new Array(sizeOfArray);

for(let key = 0; key < array.length; key++){
    array[key] = generateRandomNumber(30, -20);
    document.write(array[key] + ' ');
}
document.write("</p>"); 


function checkValue(typeOfValue, placeToSearch) {
    let value;
    if (typeOfValue == "Number"){
        
        value = Number(prompt("Введите значение для проверки"));
        alert(placeToSearch.includes(value))
        
    } 
    else {
        let counter = 1;
        value = String(prompt("Введите значение для проверки"));
        for (let key of placeToSearch){
            alert("Элемент " + value + " в массиве " + counter + " есть: " + key.includes(value))
            counter++;
        }
    } 
}


document.write("<p>Задание 2<br>");
var sizeOfArray2 = generateRandomNumber(10, 3);
var array2 = new Array(sizeOfArray2);

for(let key = 0; key < array2.length; key++){
    if (key != 2) array2[key] = generateRandomNumber(30, -20);
    else array2[2] = NaN;
    document.write(array2[key] + ' ');
}
document.write("</p>"); 
document.write("Includes " + array2.includes(NaN) + "<br>");
let firstElem = array2[0];
if (array2.indexOf(firstElem) !== -1) document.write("IndexOf array2[0] (" + firstElem + ") is true <br>");
if (array2.indexOf(NaN) !== -1) document.write("IndexOf array2[2](NaN) (" + array2.indexOf(NaN) + ") is true <br>");
else document.write("IndexOf array2[2](NaN) (" + array2.indexOf(NaN) + ") is false <br>");

document.write("<p>Задание 3");
var counter = 0;
var arrayForTask3 = new Array();

for(let i = 0; i < 3; i++){

    let sizeOfArray3 = generateRandomNumber(10, 2);
    let array3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let newArrayString = new Array(sizeOfArray3);
    arrayForTask3[counter++] = newArrayString;
    
    document.write("<p>");
    for(let key = 0; key < sizeOfArray3; key++){
        newArrayString[key] = array3[generateRandomNumber(array3.length - 1, 0)];
        document.write(newArrayString[key] + ' ');
    }
    document.write("</p>");    
}
document.write("</p><p>Задание 4<br>"); 

for (let key = 0; key < 3; key++) {
    let toSolve = generateRandomNumber(500, 2) + " ** " + generateRandomNumber(10, 2) + " / " + generateRandomNumber(500, 2) + "+" + generateRandomNumber(500, 2);
    document.write("Пример " + (key + 1) + ": " + toSolve + " = " + Math.round(eval(toSolve)) + "<br>")
}
document.write("</p>"); 