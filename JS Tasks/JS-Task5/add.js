let word = prompt("Enter word", "")
let letter = prompt("Enter letter", "")
function firstLetter(word,letter){
    for (let i = 1; i < word.length; i++) letter += word[i];
    return letter;
}
alert(firstLetter(word, letter));