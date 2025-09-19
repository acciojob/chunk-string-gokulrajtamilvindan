function stringChop(str, size) {
    // Return empty array for null/undefined input (acceptance criteria).
    if (str == null) return [];

    // Convert size to a finite integer. Handle invalid sizes (NaN, <=0).
    size = Number(size);
    if (!Number.isFinite(size)) return [];
    size = Math.floor(size);
    if (size <= 0) return [];

    // Chunking loop (O(n) time, O(n/size) substrings memory).
    const result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
