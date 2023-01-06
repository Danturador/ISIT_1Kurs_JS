let CPU = {
    intel: "i5-12600",
    codeCristallName: "Ander Lake",
    cost: 1059,
    carrency: "bun"
}
let objectKeys = Object.keys(CPU).map(key => CPU[key]);
document.write(objectKeys + "<br>");
let objectValues = Object.values(CPU);
document.write(objectValues + "<br>");


const formatted = [1, 111, 1111, 1111111, 11, 11111, 111111].map(num => {
    document.write("<br>" + num.toString().padStart(8, '0') + num.toString().padEnd(7, '2'))
})

let sizeOfArray3 = generateRandomNumber(10, 2);
let array3 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let myName = "Данила Лученок", randomSymbolsString = "";
document.write("<br>");

for (let i = 0; i < sizeOfArray3; i++){
    randomSymbolsString += array3[generateRandomNumber(array3.length - 1, 0)];
}

for(let key = 0; key < myName.length; key++){
    if (key == 0) document.write(myName[0].toString().padStart(sizeOfArray3, randomSymbolsString));
    else if (key == myName.length - 1) document.write(myName[myName.length - 1].toString().padEnd(3, "17"));
    else document.write(myName[key]);
}

let newArrayString = new Array(sizeOfArray3);
    
    document.write("<p>");
    for(let key = 0; key < sizeOfArray3; key++){
        newArrayString[key] = array3[generateRandomNumber(array3.length - 1, 0)];
        if (key == 0) document.write(newArrayString[0].toString().padStart(5, '1'));
        else if (key == sizeOfArray3 - 1) document.write(newArrayString[sizeOfArray3 - 1].toString().padEnd(5, '0'));
        else document.write(newArrayString[key]);
    }
    document.write("<br>");
    for(let key = 0; key < sizeOfArray3; key++){
        document.write(newArrayString[key]);
    }

    document.write("</p>"); 
    
    function generateRandomNumber(max, min) {
        return Math.round(Math.random() * (max - min) + min);
    }

    let Gruppa = {
        gr1: 25,
        gr2: 23,
        gr3: 28,
    }
    let propToShow = Gruppa.gr1;
    let name = "Ваня";
    document.write("propToShow " + propToShow)

    Object.defineProperty(Gruppa, "curatorName", {
        get: function() { return name; },
        set: function(curatorName) { name = curatorName },
        enumerable: true,
        configurable: true
    })
    document.write("<br>" + Gruppa.curatorName);