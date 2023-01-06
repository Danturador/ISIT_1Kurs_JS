function task1() {
    const str = 'Сд\nелать так, чтобы точка в регулярных выражениях соответствовала абсолютно всем символам, включая \n d';
    const text = str.match(/./gims);
    console.log(text);
    return text;
}
 
let line1 = document.createElement("p");
line1.innerHTML += "<br>Результат: " + task1();
document.getElementById("change").appendChild(line1);

function task2(text) {
    text = text.replace(/\[u\]([\s\S]*)\[\/u\]/, '<u>$1</u>')
  
    return text
}
 
let line2 = document.getElementById("changeU").textContent;
document.getElementById("changeU").innerHTML += "<br>Результат " + task2(line2);

function task3(text) {
    text = text.replace(/\<a\>([\s\S]*)\<\/a\>/, '$1')
  
    return text
}
 
let line3 = document.getElementById("chang").textContent;
document.getElementById("chang").innerHTML += "<br>Результат " + task3(line3);

function task4() {
    const str = 'привет валера как ты'
    const st = /(.*)\s(.*)\s(.*)\s(.*)/
    const text = str.replace(st, '$4 $3 $2 $1')
    
    return text
}
document.getElementById("chan").innerHTML += "<br>Результат " + task4();

let obj = {
    firstName: 'Kate',
    lastName: 'Kovaleva',
    age:18,
    height:'5.10',
    race: 'martian',
};
let newObj = {"physics": 67, "math": 80, "language": 77}

let usingRest = ({firstName, lastName, ...rest}) => rest
let objWithRest = obj;
console.log(objWithRest);
console.log(usingRest(objWithRest));

let newObject = {...obj, ...newObj};
let deletePropUsingRest = ({firstName, lastName, height, ...rest2}) => rest2
newObject = {"name": "Данила", "lName": "Лученок", ...newObject}
console.log(newObject);
console.log(deletePropUsingRest(newObject));