//A hashset lets you store unique values without keys, using any type. Its main methods are:

// new Set([iterable data structure]);
// set.add(value); adds a value and returns the set itself
// set.delete(value); returns true if th value existed at the moment of the call, otherwise returns false
// set.has(value); returns true if the value exists in the set, otherwise false
// set.clear(); removes everything from the set
// set.size(); returns the element count

let nums = [1,12,45,2];
let numberSet = new Set(nums);

if(numberSet.has(120)){
    console.log(true);
    return;
}

// Hash Set Problems

//2Sum
// Approach -> HashSet (sum = target - nums[i])
const nums2 = [2,7,11,15];
const target = 26;

function TwoSum(nums, target){
    // edge case
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