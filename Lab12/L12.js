window.onload = function() {
    // Задание 1
    let phoneMap = new Map();
    phoneMap.set('1', '+375291622379');
    phoneMap.set('2', '+375298382536');
    phoneMap.set('3', '+375334984633');
    phoneMap.set('4', '+375299934311');
    phoneMap.set('5', '+375291674966');

    function chooseNumber() {
        let numberInList = String(prompt("Введите номер от 1 до 5 "));
        alert(phoneMap.get(numberInList));
    }
    chooseNumber();

    // Задание 2
    let set = new Set();
    set.add(1).add(3).add(5);
    document.write("Задание 2<br>");
    document.write("Размер Set'a: " + set.size + ". Используйте метод has() для проверки элементов 1, 3, 5 в объекте Set: ");
    set.forEach((value, key, set) => document.write("значение: " + value + " " + set.has(key) + " "));
    document.write("Метод has возвращает: " + typeof(set.has(3)) + "<br>");

    // Задание 3
    document.write("Задание 3<br>");
    var proto = { 
        name: "Данила",
        lastName: "Лученок",
        patronicName: "Александрович",
        showContent: function () {
            let str = "";
            for(let key in this){
                if (typeof(this[key]) != "function"){
                    str += " " + this[key] + " ";
                }
            }
            document.write(str);
        }
    }
    document.write("Содержимое proto: ");
    proto.showContent();
    var proto2 = Object.create(proto);
    proto2.name = "Дэн";
    document.write("Содержимое proto2: ");
    proto2.showContent();

    //Задание 4
    document.write("<br>Задание 4");
    let userName = prompt("Введите имя: ");
    sayHi(userName);
    function sayHi(name) {
            name = name != '' ? name : "Аноним";
            let str = "Привет, " + name;
            document.write("<br>" + str);
    }
    //Задание 5
    document.write("<br>Задание 5<br>");
    for (var i = 0; i < 5; i++) {
        let newButton = document.createElement("button");
        newButton.textContent = "0";
        document.body.appendChild(newButton);
    } 
    let function1 = function(){
        let k = 1;
        function function2() {
            this.textContent = k;
            return k++;
        }
        return function2;
    }
    
    var all_buttons = document.getElementsByTagName('button');
    for (var i = 0; i < all_buttons.length; i++) {
        all_buttons[i].onclick = function1();
    }
}