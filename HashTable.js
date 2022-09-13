// Overview:
//      Hash Tables are used to implement associative arrays or key value pairs.
//      The average time for each look up is not tied to the # of elements stored in the table

/* Hash Table */

const HashFunction = (key, size) => {
  let HashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    HashedKey = key.charCodeAt(i); // this will assign the HashedKey variable to the character code of the last letter of the key argument (which is a string)
  }
  console.log(HashedKey);
};

class HashTable {
  constructor() {
    this.size = 20;
    this.buckets = Array(this.size);
  }

  insert(key, value) {
    let index = HashFunction(key, this.size);
  }
}

const PersonOne = new HashTable();
PersonOne.insert("Matthew", 20);

console.log(PersonOne);
