num = Math.floor(Math.random() * 50) + 1;

alert(num)
for (let i = 0; i < 50; i++) {
    numUser = prompt("Enter number")
    if (num == numUser) {
        alert("kapital bank hesabinda 1000 manat kocurulsun \nNumber of attempts: " + (i + 1));
        break;
    }
}
