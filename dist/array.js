// Code Listing 2.1: Creating a typed array from an array buffer 
// and modifying the array buffer through the typed array
const a = new ArrayBuffer(6);
console.log(a);
// a[2] = 333; // error TS2490: Type 'ArrayBuffer' cannot be used as an index type.
// unit8array is a view of the array buffer a
// unit8array is a typed array of 8-bit unsigned integers
const a8 = new Uint8Array(a);
a8[2] = 45;
console.log(a);
console.log(a8);
// unit16array is a view of the array buffer a
// unit16array is a typed array of 16-bit unsigned integers
const a16 = new Uint16Array(a);
console.log(a);
console.log(a16);
// time complexity of accessing an element in an array is O(1)
console.log(a16[1]);
// the benefit of using typed array is that it can be used to access the same array buffer
// with different data types and different views of the same array buffer
// the following code shows that the array buffer a is accessed by a8 and a16 at the same time
// they use less memory than regular javascript arrays 
// because they are stored in a single array buffer
// the memory is allocated in a single contiguous block of memory
// the following code shows that the array buffer a is accessed by a8 and a16 at the same time
// which means that it is possible to access the same array buffer with different data types
// so 2 different views of the same array buffer are possible with different data types
//////////////////////////////////////////////////////////////////////////////////////////
// string encoding and decoding to add strings to an array buffer
//////////////////////////////////////////////////////////////////////////////////////////
const strings2 = ["Hello", "World", "How", "Are", "You", "Today"];
const encoder2 = new TextEncoder();
const decoder2 = new TextDecoder();
// encode the strings into a single array buffer
let totalLength2 = 0;
const encodedDataArray2 = [];
for (let i = 0; i < strings2.length; i++) {
    const encodedData2 = encoder2.encode(strings2[i]);
    encodedDataArray2.push(encodedData2);
    totalLength2 += encodedData2.length;
}
// combine the encoded data into a single array buffer
const buffer2 = new Uint8Array(totalLength2);
let offset2 = 0;
for (let i = 0; i < encodedDataArray2.length; i++) {
    const encodedData2 = encodedDataArray2[i];
    buffer2.set(encodedData2, offset2);
    offset2 += encodedData2.byteLength;
}
// search for the string "World" in the array buffer
const searchString2 = "World";
const encodedSearchString2 = encoder2.encode(searchString2);
let foundIndex2 = -1;
let currentOffset = 0;
for (let i = 0; i < strings2.length; i++) {
    const encodedData2 = new Uint8Array(buffer2.buffer, currentOffset, strings2[i].length);
    if (encodedData2.byteLength === encodedSearchString2.byteLength) {
        let found = true;
        for (let j = 0; j < encodedData2.byteLength; j++) {
            if (encodedData2[j] !== encodedSearchString2[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            foundIndex2 = i;
            break;
        }
    }
    currentOffset += encodedData2.byteLength;
}
console.log(foundIndex2);
console.log(strings2[foundIndex2]);
// decode the array buffer into a string
const decodedStrings2 = [];
let currentOffset2 = 0;
for (let i = 0; i < strings2.length; i++) {
    const encodedData2 = new Uint8Array(buffer2.buffer, currentOffset2, strings2[i].length);
    const decodedString2 = decoder2.decode(encodedData2);
    decodedStrings2.push(decodedString2);
    currentOffset2 += encodedData2.byteLength;
}
console.log(decodedStrings2);
