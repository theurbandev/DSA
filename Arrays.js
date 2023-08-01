/*  
Arrays are one of the most basic data strictures of them all. They are known for fast lookup times, but slow insertions. 
In memory, an array has to find sequential slots available to store the data in memory. 
*/

// ______________________________________________________________________________________________________________________ //

// Common array methods
// - Filter
// - Map
// - Reduce
// - Join

// Filter
// O(n)[space] O(n)[time] - creates a shallow copy of an array, filtered down to just the elements from the given array that meet conditions of the provided function
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const filter_results = words.filter((word) => word.length >= 7);
console.log(filter_results);

// Map
// O(n)[space] O(n)[time] - map, is similar to filter, except it creates a new array (deep copy) instead of a shallow copy.
const preMappedWord = ["kite", "animal", "car", "bike"];
const map_results = preMappedWord.map((word) => word + "-mapped");
console.log(map_results);

// Join
// O(1)[space] 0(n)[time] - returns a string from an array that can have delimiters based on given arguments
const unJoinedName = ["m", "a", "t", "t"];
console.log(unJoinedName.join());
console.log(unJoinedName.join(""));
console.log(unJoinedName.join("+"));

// Reduce
// O(n)[space] O(n)[time] - reduce takes in a callback function that is called on each element in an array. however, the accumulator is passed back into the function and used on the preceding element of the array - The final result of running the reducer across all elements of the array is a single value.
const shoppingCartCosts = [2.99, 200.99, 389.94];
const totalCost = shoppingCartCosts.reduce((accumulator, itemCost) => {
  return accumulator + itemCost;
}); // accumulator starts at array[0] - if not explicitly defined
console.log(`Total cost of items is $${Math.round(totalCost * 100) / 100}`);

// ______________________________________________________________________________________________________________________ //

// There are 6 core operations one could perform on an array. Get, Set, Init, Traverse/Looping, Copy, and Insertion.

// Init
// O(n)[space]  O(n)[time] - this is because the computer needs to find space in memory to fit the array values in sequential order. The larger the array, the more space space needs to be found.
const computers = ["MacBook Pro", "Dell XPS", "Chromebook"];
console.log({ computers });

// Get
// O(1)[space]  O(1)[time] - getting an elements constant time because we know exactly where the element is +  we are not using any extra space.
console.log(computers[2]);

// Set
// O(1)[space]  O(1)[time] - setting/overwriting an element would also be constant time and space because we are not changing the amount of space needed, and we already know where the element is
computers[1] = "Not A MacBook";
console.log(computers);

// Traverse
// O(1)[space]  O(n)[time] - if you are ONLY traversing you don't need to store anything new, meaning constant space. Alternatively, when looping through the array, the time needed to do so depends, or scales linearly, to the length of the array.
for (let interval = 0; interval < computers.length; interval++) {
  console.log(`Computer ${interval}: ` + computers[interval]);
}

// Copy
// O(n)[space]  O(n)[time] - copying requires you to find space for the new array + the time needed will scale linearly with the length of the array
const newArray = computers.slice(0, 2);
console.log({ newArray });

// ______________________________________________________________________________________________________________________ //

// Insertion & Deletion
// - Push : adds to the end
// - Pop: removes from the end
// - Shift: removes from the  beginning
// - Unshift: adds to the beginning
// - Splice: remove an element, given the index

// Inserting into an array will be very taxing because you must traverse the whole array and make room for the new value. This will take O(n) time and O(1) space because the OS will free up the initial place the array was held

// Insertion (end)
console.log(computers);
computers.push("Samsung");
console.log({ computers });

// Deletion (end)
computers.pop();
console.log(computers);

//Insertion (beginning)
computers.unshift("Dell");
console.log(computers);

// Deletion (beginning)
computers.shift();
console.log(computers);

// Deletion (index specific)
const index = computers.indexOf("Not A MacBook");
if (index) {
  computers.splice(index, 1);
} else {
  console.log("element not found");
}
console.log(computers);

// ______________________________________________________________________________________________________________________ //

// Other important array stuff

// Finding an item in a array without knowing the index. indexOf returns -1 if not found, otherwise returns the index of the item specified
const isItThere = computers.indexOf("MacBook Pro");
console.log(isItThere);

// Looping
// for...of
for (const items of computers) {
  console.log(items);
}

// Converting between string and arrays (Split and Join)
const joinCompList = computers.join(",");
console.log(joinCompList);

const splitCompList = joinCompList.split(",");
console.log(splitCompList);

// Reversing
const computersReversed = computers.reverse();
console.log(computersReversed);

// ______________________________________________________________________________________________________________________ //

/* Array Problems */

// Has Duplicates
const nums = [1, 2, 3, 4, 4, 5];
let numsSet = new Set();

function hasDuplicates(array) {
  for (let i = 0; i < nums.length; i++) {
    if (numsSet.has(nums[i])) {
      console.log("Duplicate found: " + nums[i]);
      return true;
    }
    numsSet.add(nums[i]);
  }
}
hasDuplicates(nums);

// 2Sum
// Approach -> HashSet (sum = target - nums[i])
const nums2 = [2, 7, 11, 15];
const target = 26;

function TwoSum(nums, target) {
  // edge case
  if (nums == null || nums.length == 0) return 0;

  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let sum = target - nums[i];
    if (!set.has(sum)) {
      set.add(nums[i]);
    } else {
      return [nums.indexOf(sum), i];
    }
  }
  return "No Sum Found!";
}
console.log(`TWO SUM: ${TwoSum(nums2, target)}`);

// 3Sum to 0
// Approach -> Sorting + 2 Pointers
const nums3 = [-1, 0, 1, 2, -1, -4];

function ThreeSum(nums) {
  // edge cases
  if (nums.length == 0 || nums == null) {
    return [];
  }
  if (nums.length == 3) {
    let sum = nums.reduce((accumulator, num) => {
      return accumulator + num;
    });
    if (sum == 0) {
      return [nums];
    }
  }

  nums.sort((a, b) => {
    return a - b;
  }); // [ -4, -1, -1, 0, 1, 2 ]
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] !== nums[i - 1]) {
      let L = i + 1;
      let R = nums.length - 1;

      while (L < R) {
        let currentSum = nums[i] + nums[L] + nums[R];
        if (currentSum == 0) {
          result.push([nums[i], nums[L], nums[R]]);
          while (nums[L] == nums[L + 1]) L++;
          while (nums[R] == nums[R - 1]) R--;
          L++;
          R--;
        } else if (currentSum < 0) {
          L++;
        } else if (currentSum > 0) {
          R--;
        }
      }
    }
  }
  return result;
}
console.log(`3SUM: ${ThreeSum([0, 0, 0])}`);

// Maximum Subarray
// Approach -> "sliding window-ish"
const nums4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function maxSubArray(nums) {
  let maxSum = nums[0];
  let currSum = 0;

  for (const num of nums) {
    if (currSum < 0) {
      currSum = 0;
    }
    currSum += num;
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
console.log(maxSubArray(nums4)); // output should be 6
