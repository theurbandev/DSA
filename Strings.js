// Examples of string problems


/* Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function
that returns a new string obtained by shifting every letter in the given string input, but k positions in the alphabet, where k is the key */

function caesarCipherEncryptor(string, key) {
    // Example below: 
    // "timmy" <- shift by k positions..
    // k = 1 -> "timmy" becomes "ujnnz"
    // O(n) Space Time Complexity 

    return shift(string, key).join("");
}
  
function shift(string, key){
    let shiftArr = [];
    let newLetterCode = "";

    for (let index = 0; index < string.length; index++) {
        // console.log(string.charAt(index + key));
        newLetterCode = string.charCodeAt(string[index] + key);      
        shiftArr.push(string[index].charAt(index)); 
    }

    console.log(shiftArr);
    return shiftArr;
}

  caesarCipherEncryptor("abc", 2);
   