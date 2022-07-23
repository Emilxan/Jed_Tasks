let key = prompt("Task1 enter 1\nTask2 enter 2\nTask3 enter 3 and open console\nEnter key");

if (key == 1) {
    let lett = prompt("Enter Letter", "");
    let splitFunc = (letter) => letter.split(" ");
    alert(splitFunc(lett));
} else if(key == 2){
    let lett = prompt("Enter Letter", "");
    function abberFunc(letter){
        let arr = letter.split(" ");
        let sName = arr[1];
        return arr[0] + " " + sName[0] + ".";
    }
    alert(abberFunc(lett));
} else if(key == 3) {
    let lett = prompt("Enter Letter", "");
    let word = prompt("Enter Word", "");
    function removeFunc(letter, word){
        let pos = -1, i = 0;
        let arr = [];
        let newLetter = "";
        while ((pos = letter.indexOf(word, pos + 1)) != -1) {
            arr[i] = pos;
            i++;
        }
        outer: for (let i = 0; i < letter.length; i++) {
            for (let j = 0; j < arr.length; j++) if (i == arr[j]) continue outer;
            newLetter += letter[i];
        }
        
        return newLetter;
    }
    alert(removeFunc(lett, word));
} else {
    alert("Eror, invalid key refresh page ")
}