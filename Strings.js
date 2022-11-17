// Examples of string problems


// Caesar Cipher Encryption
/* Given a non-empty string of lowercase letters and a non-negative integer representing a key, write a function
that returns a new string obtained by shifting every letter in the given string input, but k positions in the alphabet, where k is the key */

// [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]

function caesarCipherEncryptor(string, key) {
    // Write your code here.
      let output = [];
      let newKey = key % 26;
      
      for(const letters of string){
          let newLetters = getNewLetter(letters, newKey);
          output.push(newLetters);
      }
      console.log(output.join(""));
      return output.join("");
  }
  
  function getNewLetter(letters, key){
      //turn the letters into the appropriate nums (according to the key)
      //return the new nums as letters
      newLetterCode = letters.charCodeAt() + key;
      return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) : String.fromCharCode(96 + (newLetterCode % 122));
  }
  

  caesarCipherEncryptor("zback", 2);
   