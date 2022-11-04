// Overview:
// Arrays are one of the most basic data strictures of them all. They are known for fast
// lookup times, but slow insertions. In memory, an array has to find sequential slots available to store the
// data in memory. 


// There are 6 core operations one could perform on an array. Get, Set, Init, Traverse/Looping, Copy, and Insertion.

// Init
// O(n)[space]  O(n)[time] - this is because the computer needs to find space in memory to fit the array values in sequential order. The larger the array, the more space space needs to be found. 
const computers = ["MacBook pro", "Dell xps", "Chromebook"];


// Get
// O(1)[space]  O(1)[time] - getting an elements constant time because we know exactly where the element is +  we are not using any extra space.
computers[2];


// Set
//  O(1)[space]  O(1)[time] - setting/overwriting an element would also be constant time and space because we are not changing the amount of space needed, and we already know where the element is
computers[1] = "Not A MacBook";


// Traverse
// O(1)[space]  O(n)[time] - if you are ONLY traversing you don't need to store anything new, meaning constant space. Alternatively, when looping through the array, the time needed to do so depends, or scales linearly, to the length of the array.
for(let interval = 0; interval < computers.length; interval++){
    console.log(`Computer ${interval}: ` + computers[interval]);
}


// Copy
// O(n)[space]  O(n)[time] - copying requires you to find space for the new array + the time needed will scale linearly with the length of the array 
const newArray = computers.slice();


// Insertion
// 

console.log(computers);