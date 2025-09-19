function stringChop(str, size) {
    if (str === null) return [];      // handle null input
    size = parseInt(size, 10);        // convert size to number
    if (isNaN(size) || size <= 0) return [];  // invalid size
    
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.substring(i, i + size));  // safe chunking
    }
    return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = prompt("Enter Chunk Size:");
alert(JSON.stringify(stringChop(str, size)));
