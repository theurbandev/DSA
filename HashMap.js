// Overview:
// Hash Map are used to implement associative arrays or key value pairs.
// The average time for each look up is not tied to the # of elements stored in the table
// Therefore, finding, adding, and removing elements in a hash map is fast af O(1) time complexity

/* Hash Table */
const MyNamesHashMap = new Map();

//set (if element already exist in the map, the value will be updated)
MyNamesHashMap.set("Matt", "Person1");
MyNamesHashMap.set("Jim", "Person2");
MyNamesHashMap.set("John", "Person3");

//removing (returns a bool)
MyNamesHashMap.delete("Matt");

//has (returns a bool)
MyNamesHashMap.has("Jim");

//get (returns an element associated with the provided key : undefined if element does not exist)
MyNamesHashMap.get("John");



// How a hash map works under the hood (Map takes the complexity out of creating a hashing key)
const TestTable = {};
TestTable["FirstName"] = "Matt";

const HashFunction = (key, tableSize) => {
  let HashedKey = 17;

  for (let i = 0; i < key.length; i++) {
    // this will assign the HashedKey variable to the character code of the last letter of the key argument (which is a string)
    HashedKey = (5 * key.charCodeAt(i)) % tableSize;
  }
  return HashedKey;
};

class HashTable {
  table = new Array(3);

  setItem = (key, value) => {
    let idx = HashFunction(key, this.table.length);
    this.table[idx] = value;
  };

  getItem = (key) => {
    let idx = HashFunction(key, this.table.length);
    return this.table[idx];
  };
}

const MyTable = new HashTable();
MyTable.setItem("PersonOne", "Matt");
MyTable.setItem("PersonTwo", "Tim");
console.log(MyTable.getItem("PersonTwo"));