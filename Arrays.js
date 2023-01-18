/*  
Arrays are one of the most basic data strictures of them all. They are known for fast lookup times, but slow insertions. 
In memory, an array has to find sequential slots available to store the data in memory. 
*/

// Common array methods
// - Filter
// - Map
// - Reduce
// - Join

// Filter
// O(n)[space] O(n)[time] - creates a shallow copy of an array, filtered down to just the elements from the given array that meet conditions of the provided function
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const filter_results = words.filter(word => word.length >= 7);
console.log(filter_results);


// Map
// O(n)[space] O(n)[time] - map, is similar to filter, except it creates a new array (deep copy) instead of a shallow copy. 
const preMappedWord = ['kite', 'animal', 'car', 'bike'];
const map_results = preMappedWord.map(word => word + "-mapped");
console.log(map_results);


// Join 
// O(1)[space] 0(n)[time] - returns a string from an array that can have delimiters based on given arguments 
const unJoinedName = ['m','a','t','t'];
console.log(unJoinedName.join());
console.log(unJoinedName.join(""));
console.log(unJoinedName.join("+"));

// Reduce
// O(n)[space] O(n)[time] - reduce takes in a callback function that is called on each element in an array. however, the accumulator is passed back into the function and used on the preceding element of the array - The final result of running the reducer across all elements of the array is a single value.
const shoppingCartCosts = [2.99, 200.99, 389.94];
const totalCost = shoppingCartCosts.reduce((accumulator, itemCost) => {return accumulator + itemCost}); // accumulator starts at array[0] - if not explicitly defined
console.log(`Total cost of items is $${Math.round(totalCost * 100) / 100}`);



// There are 6 core operations one could perform on an array. Get, Set, Init, Traverse/Looping, Copy, and Insertion. //

// Init
// O(n)[space]  O(n)[time] - this is because the computer needs to find space in memory to fit the array values in sequential order. The larger the array, the more space space needs to be found. 
const computers = ["MacBook pro", "Dell xps", "Chromebook"];
console.table({computers});


// Get
// O(1)[space]  O(1)[time] - getting an elements constant time because we know exactly where the element is +  we are not using any extra space.
computers[2];


// Set
//  O(1)[space]  O(1)[time] - setting/overwriting an element would also be constant time and space because we are not changing the amount of space needed, and we already know where the element is
computers[1] = "Not A MacBook";


// Traverse
// O(1)[space]  O(n)[time] - if you are ONLY traversing you don't need to store anything new, meaning constant space. Alternatively, when looping through the array, the time needed to do so depends, or scales linearly, to the length of the array.
for(let interval = 0; interval < computers.length; interval++){
    console.table(`Computer ${interval}: ` + computers[interval]);
}


// Copy
// O(n)[space]  O(n)[time] - copying requires you to find space for the new array + the time needed will scale linearly with the length of the array 
const newArray = computers.slice(0, 2);
console.table({newArray}); 


// Insertion
// Inserting into an array will be very taxing because you must traverse the whole array and make room for the new value. This will take O(n) time and O(1) space because the OS will free up the initial place the array was held
computers.push("Samsung");
console.table({computers})



/* Array Problems */

//Has Duplicates
const nums = [1,2,3,4,4,5];
let numsSet = new Set();

function hasDuplicates(array){
    for(let i=0; i < nums.length; i++){
        if(numsSet.has(nums[i])) {
            console.log("Duplicate found: " + nums[i]);
            return true
        }
        numsSet.add(nums[i]);
    };
};
hasDuplicates(nums);


//2Sum
// Approach -> HashSet (sum = target - nums[i])
const nums2 = [2,7,11,15]
const target = 26;

function TwoSum(nums, target){
    if(nums == null || nums.length == 0) return 0;

    let set = new Set();
    for(let i=0; i<nums.length; i++){
        let sum = target - nums[i];
        if(!set.has(sum)){
            set.add(nums[i]);
        }else{
            return [nums.indexOf(sum),i];
        }
    }return "No Sum Found!";
}
console.log(`TWO SUM: ${TwoSum(nums2, target)}`);


//3Sum
// Approach -> 
const nums3 = [-1, 0, 1, 2, -1, -4];