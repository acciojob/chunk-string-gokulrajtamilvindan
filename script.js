function stringChop(str, size) {
    if (str === null) return [];  // Handle null case
    size = Number(size);          // Ensure size is a number
    if (size <= 0) return [];     // Edge case: invalid size
    
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = prompt("Enter Chunk Size:");
alert(JSON.stringify(stringChop(str, size)));