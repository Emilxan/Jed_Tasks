let key = prompt("Task1 enter 1\nTask2 enter 2\nTask3 enter 3 and open console\nEnter key");

if (key == 1) {
    num = Math.floor(Math.random() * 50) + 1;
    alert(num);

    for (let i = 0; i < 50; i++) {
        numUser = prompt("Enter number")
        if (num == numUser) {
            if (i === 1) {
                alert("kapital bank hesabinda 1000 manat kocurulsun \nNumber of attempts: " + (i + 1));
                break; 
            } else if(i <= 5) {
                alert("kapital bank hesabinda 750 manat kocurulsun \nNumber of attempts: " + (i + 1));
                break; 
            } else if(i <= 9 & i >= 6) {
                alert("kapital bank hesabinda 250 manat kocurulsun \nNumber of attempts: " + (i + 1));
                break; 
            } else {
                alert("kapital bank hesabinda -250 manat qoturuldu \nNumber of attempts: " + (i + 1));
                break; 
            }
        }
    }
} else if(key == 2){
    function sumLoop(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) sum += i;
        return sum;
    }
    num = prompt("Enter last number:")
    alert("Sum = " + sumLoop(num));

    // function sumRecursiya(num) {
    //     if (num == 1) return 1;
    //     return num + sumRecursiya(num - 1);
    // }
    // num = prompt("Enter last number:")
    // alert("Sum = " + sumRecursiya(parseInt(num)));
} else if(key == 3) {
    for (let i = 5; i > 0; i--) console.log('*'.repeat(i));
} else {
    alert("Eror, invalid key refresh page ")
}