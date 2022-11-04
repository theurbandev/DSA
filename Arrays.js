// Overview:
// Arrays are one of the most basic data strictures of them all. They are known for fast
// lookup times, but slow insertions. In memory, an array has to find sequential slots available to store the
// data in memory. 


// There are three main operations one could perform on an array. Get, Set, and Init.

// Init
// O(n)[space] x O(n)[time] - this is because the computer needs to find space in memory to fit the array values in sequential order. The larger the array, the more space space needs to be found. 
const computers = ["MacBook pro", "Dell xps", "Chromebook"];

// Get
// O(1)[space] x O(1)[time] - getting an elements constant time because we know exactly where the element is +  we are not using any extra space.
computers[2];
 
//Set
// O(1)[space] O(1)[time] - setting an element would also be constant time and space because we know the Length of the arr, so 
computers[1] = "Not A MacBook";

console.log(computers);