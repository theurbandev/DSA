//A hashset lets you store unique values without keys, using any type. Its main methods are:

// new Set([iterable data structure]);
// set.add(value); adds a value and returns the set itself (if the value already exists, the set will not add the value)
// set.delete(value); returns true if th value existed at the moment of the call, otherwise returns false
// set.has(value); returns true if the value exists in the set, otherwise false
// set.clear(); removes everything from the set
// set.size(); returns the element count

let numberSet = new Set([1, 2, 3, 4, 5]);

if (numberSet.has(5)) {
  console.log(true);
}

numberSet.add(6);

numberSet.delete(1);

console.log(numberSet.size);

for (item of numberSet) {
  console.log(item);
}

numberSet.clear();

// HashSet Problems

//2Sum
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
