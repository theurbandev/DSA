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