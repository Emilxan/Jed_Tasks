let key, keyConsole;
let rectangleWidth, rectangleLength;
let birthYear;
let km;

key = prompt("If u need to find the area of the rectangle enter 1 \nIf u need to find your age enter 2 \nIf u need to convert kilometers to milli enter 3 \nIF U WANT TO WORK IN CONSOLE ENTER 4 AND OPEN CONSOLE");

if (key == 1) areaRect(rectangleWidth, rectangleLength);
else if(key == 2) findBirthYear(birthYear);
else if(key == 3) kmInMile(km);
else if(key == 4) howWork();
else alert("You don't select tru number, please relode page");

function areaRect(rectangleWidth, rectangleLength){
    rectangleWidth = prompt("Enter Width");
    rectangleLength = prompt("Enter Length");
    alert(rectangleWidth * rectangleLength);
}
function findBirthYear(birthYear){
    birthYear = prompt("Enter Birth Year");
    alert(2022 - birthYear);
}
function kmInMile(km){
    km = prompt("Enter Km");
    alert((km * 0.6214E+4)/10000);
}

function howWork(){
    console.log("How to work with the program \n\nto select one of the 3 job options u should enter KEY, KEY is your Key \n\nif u need to find the area of the rectangle your key is 1 and u should enter 'EnterNum(1, WIDTH, LENGTH)' \n\nIf u need to find your age your key is 2 and u should enter 'EnterNum(2, NUM)' \n\nIf u need to convert kilometers to milli your key is 3 and u should enter 'EnterNum(3, NUM)'");
    console.log("When u need enter var\n\nIf u need to enter the width and length of the rectangle write 'EnterNum(WIDTH, LENGTH)' where WIDTH and LENGTH your numbers \n\nIf u need to enter your birth year or km write 'EnterNum(NUM)' where NUM your numbers ");
}
function EnterNum(keyConsole , a, b){
    if (arguments.length == 2) {
        if (keyConsole == 2) console.log("Your age: " + (2022 - a));
        else if(keyConsole == 3) console.log(a + " km is " + ((a * 0.6214E+4)/10000) + " mile");
        else console.log("Eror, Not faund this KEY");  
    } else if(arguments.length == 3) console.log("Your area: " + (a * b));
}