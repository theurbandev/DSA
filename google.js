const numArr = [1,3,65,2,19,900];

const test = (input) => {
    // nested for loop O(n^2) time and O(1) space
    for(let i=0; i <= input; i++){
        for(let j=0; j <= input; j++){
            console.log(i, j)
        }
    }
};
// test(4);

const testWhileLoop = (input) => {
    while(input > 5){
        input = Math.floor(input/2);
        console.log(input);
    }
}
// testWhileLoop(100);

 
let strs = ["eat","tea","tan","ate","nat","bat"];

const groupAnagram = (strings) =>{
    let result = {};
    for(str of strings){
        let countArr = new Array(26).fill(0);
        for(char of str){
            countArr[char.charCodeAt() - "a".charCodeAt()]++; // e - a (a=96, 3=100) = 4 so.. countArr[4] would have value of 1 instead of 0
        }
        let key = countArr.join("");
        result[key] ? result[key].push(str) : result[key] = [str];
    }
    return Object.values(result);
}
console.log(groupAnagram(strs));



let nums = [1,21,300,43,5,6];
let sortedNums = nums.sort();
console.log(nums.sort((a,b) => {return a - b}));



const emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
var numUniqueEmails = function(emails) {
    //HashSet O(n * m) space and O(n * m)time
    let emailList = new Set();
    
    emails.forEach((email) => {
        let parts = email.split("@");
        let local = parts[0].split("+");
        
        emailList.add(local[0].replaceAll(".", "") + "@" + parts[1]);
    })
    
    return emailList.size;
};

console.log(numUniqueEmails(emails));


const testEmails = ["fdla@goog.com", "bbbbb@gmail.com", "skdkdikd@aoool.com"];
const newEmails = function(testEmails){
    let arr = [];
    testEmails.forEach((emailer) => {
        let e = emailer.split("@");
        let d = e[1].replaceAll(".com", ".NET");
        let t = e[0] + d;
        arr.push(t);
    });
    return arr;
};
console.log(newEmails(testEmails));




// Algo : Longest Continuos Subsequence
const trees = [1,2,1];
const totalFruit = (trees) => { 
    // error handling
    if(trees.length == 0 || trees == null){
        return 0;
    }

    let lastFruit = -1;
    let secondLastFruit = -1;
    let lastFruitCount = 0;
    let currentMax = 0;
    let max = 0;

    for(const fruit of trees){
        if(fruit == lastFruit || fruit == secondLastFruit){
            currentMax += 1;
        }else{
            currentMax = lastFruitCount + 1;
        }

        if(fruit == lastFruit){
            lastFruitCount += 1;
        }else{
            lastFruitCount = 1;
        }

        if(fruit != lastFruit){
            secondLastFruit = lastFruit;
            lastFruit = fruit;
        }

        max = Math.max(currentMax, max);
    }

    return max;
}
console.log(`The max amount of tress is: ${totalFruit(trees)}`);



console.log(Math.min(1,2,3,4,900,1,3,88));



