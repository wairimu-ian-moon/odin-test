/**
 * capitalizes a string
 * @function
 * @param {string} name - The name you want to capitalize
 *  */
function capitalize(string) {
    let char  = string[0].toUpperCase()
    for (let i = 1; i < string.length; i++) {
        element = string[i]
        char += element
    }
    return char
}

module.exports = {capitalize}