// Overview:
// Arrays are one of the most basic data strictures of them all. They are known for fast
// lookup times, but slow insertions. In memory, an array has to find sequential slots available to store the
// data in memory. 


// There are 6 core operations one could perform on an array. Get, Set, Init, Traverse/Looping, Copy, and Insertion.

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


// Common array methods
// - Filter
// - Map
// - Reduce
// - Join
// - Split



// Common array problems

// has duplicates problem
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