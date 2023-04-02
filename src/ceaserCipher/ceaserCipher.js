/**
 * ceaser cipher function used to cipher text
 * @function - the word you want to cipher and the key */

function ceaserCipher (word, key) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    /* 
    i will be using key == 3
    which means that the alphabet will be shifted 3 times to the back
    rep: "defghijklmnopqrstuvwxyzabc"
     */
    let alphabetUpper = alphabet.toUpperCase();
    let index = -1
    for(let i = 0; i < word.length; i++) {
        console.log(word[i])
    }
    for(let i = 0; i < key; i++) {
        console.log(alphabet[i])
    }
}
ceaserCipher("ian", 3)