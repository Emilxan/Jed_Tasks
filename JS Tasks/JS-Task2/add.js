let key = prompt("Select one of Tasks 1-9\nEnter key '1,2,3,4,5,6,7,8,9'");

if (key == 1) {
    let num = prompt("Enter Number: ");
    alert("Square root: " + Math.sqrt(num));
} else if(key == 2) {
    let num = prompt("Enter Number: ");
    alert((num * 1.8 + 32) + " Fahrenheit");
} else if(key == 3) {
    let num = prompt("Enter Number: ");
    sign = Math.sign(num);

    if (sign == 1) alert("Num is positive")
    else if(sign == -1) alert("Num is negative");
    else alert("Num is zero");
} else if(key == 4) {
    let num = prompt("Enter Number: ");
    if (num % 2 == 0) alert("Number is even");
    else alert("number is odd");
} else if(key == 5) {
    let numFirst = prompt("Enter First Number: ");
    let numSecond = prompt("Enter Second Number: ");
    let numThird = prompt("Enter Third Number: ");
    alert(Math.max(numFirst, numSecond, numThird));
} else if(key == 6) {
    let key = true;
    let num = prompt("Enter Number: ");
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            key = false;
            break;
        } 
    }
    if (key) alert("Prime number")
    else alert("Complex number")
} else if(key == 7) {
    let num = prompt("Enter Number: ");
    function factorial(num) {
        return num ? num * factorial(num - 1) : 1;
    }
    if (num > 0) alert( factorial(num)); 
    else if(num == 0) alert("1");
    else alert("Number is negative");
    
} else if(key == 8) {
    let numFirst = prompt("Enter First Number: ");
    let operator = prompt("Enter Operatot(+,-,*,/)");
    let numSecond = prompt("Enter Second Number: ");
    
    switch (operator) {
        case "+":
            alert("Result " + (parseInt(numFirst) + parseInt(numSecond)))
            break;
        case "-":
            alert("Result " + (parseInt(numFirst) - parseInt(numSecond)))
            break;
        case "*":
            alert("Result " + (parseInt(numFirst) * parseInt(numSecond)))
            break;
        case "/":
            alert("Result " + (parseInt(numFirst) / parseInt(numSecond)))
            break;
        default:
            alert("Eror in Calk")
            break;
    }
    
} else if(key == 9) {
    function sumLoop(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) sum += i;
        return sum;
    }
    num = prompt("Enter last number:")
    alert("Sum = " + sumLoop(num));
} else {
    alert("Eror, invalid key refresh page ")
}