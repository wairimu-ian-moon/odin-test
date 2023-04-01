function analyzeArray(arr) {
    const analyzeArrayObject = {}
    analyzeArrayObject["average"] = 0
    analyzeArrayObject["min"] = Math.min(...arr);
    analyzeArrayObject["max"] = 0;
    analyzeArrayObject["length"] = arr.length
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element
        analyzeArrayObject.average =  sum / analyzeArrayObject.length
        if(element >= analyzeArrayObject.max) {
            analyzeArrayObject["max"] = element
        }
    }
    return analyzeArrayObject
}

module.exports = {analyzeArray}