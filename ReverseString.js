/*3. Reverse String

Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.*/

function reverseString(string){
    if(string.length<=0){
        return ''
    }
    return reverseString(string.slice(1)) + string.slice(0,1)
}

console.log(reverseString('test string'))//expect gnirts tset
console.log(reverseString('Another String'))//expect gnirtS rehtonA
