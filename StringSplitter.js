/*String Splitter

Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

    Input: 02/20/2020
    Output: ["02", "20", "2020"]
*/

function stringSplitter(string, sep, array){
    let output = array || []
    let i = string.indexOf(sep)
 
    //base case: delimiter is not present
    if (i === -1) {
        output.push(string)
        return output
    }
    //push chars from beginning to delimiter
    output.push(string.substring(0,i))
    //grab the remaining chars after first delimiter, send it thru fx again
    return stringSplitter(string.slice(i + 1), sep, output)
     
}

console.log(stringSplitter('arr,arr,egjjg',','))
