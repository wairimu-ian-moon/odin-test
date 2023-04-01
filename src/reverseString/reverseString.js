function reverseString(string) {
    var reverse = "";
    // this gets the length of the string
    const len = string.length
    for (let i = len - 1; i >= 0; i--) {
        let element = string[i];
        reverse += element
    }
    return reverse
}

module.exports = {reverseString}
