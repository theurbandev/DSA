// Overview:
// Hash Tables are used to implement associative arrays or key value pairs.
// The average time for each look up is not tied to the # of elements stored in the table

/* Hash Table */

// Under the hood a hash table is just a fancy array
const TestTable = {};
TestTable["FirstName"] = "Matt";
// console.log(TestTable.FirstName);

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

console.log(MyTable.getItem("PersonOne"));
console.log(MyTable.getItem("PersonTwo"));