# What is Big O Notation?

Big O Notation is what's used in computer science to measure the speed and efficiency of an algorithm. Similar to cars, which use MPG to dictate a cars efficency, given a users input to the gas petal during the duration of the trip, as a form of measurement - big O notation measures the efficiency of a computer algorithm.

With Big O Notation, you express the runtime in terms of how quickly it grows relative to the size of the input. Essentially, it's a way to draw insights into how scalable an algo is.

It doesn't necessarily tell you how **fast** or **slow** an algo will run, but instead how it changes with the respect to its input size.

---

# What is space and time complexity?

Time complexity and space complexity are essentially approximations of how much **time** and how much **space** an algorithm will take to process certain inputs respectively.

There are three tiers to solve for (best case, average case, and worst case) which are known as asymptotic notions. [Big Omega, Big Theta, and Big O Notation].

Developers typically solve for the worst case scenario, Big O, because you’re not expecting your algorithm to run in the best or even average cases. It allows you to make analytical statements such as, “well, in the worst case scenario, my algorithm will scale this quickly”.

---

# Common variates of Big O:

**_O(1)_**

- Constant time complexity.
- This translates to the algo not increasing (constant) in runtime, given an increase in the input size.
  - Example: inserting or retrieving an element from an array.

**_O(log n)_**

- Logarithmic time complexity.
- O(log n) means that time goes up linearly, while the n goes up exponentially. So if it takes 1 second to compute 10 elements, it will take 2 seconds to compute 100 elements and so on. It is O(log n) when we use divide and conquer algorithms e.g binary search.
  - Example: Binary tree: inserting or retrieving an element.

**_O(n)_**

- Linear time complexity.
- O (n) means the algos runtime scales linearly, in direct proportion to the size of the input data set.
  - Example: Tree: Depth first search (DFS) of a tree.

**_O(n^2)_**

- Quadratic time complexity.
- O(n^2) means as the size of the input grows, the runtime increases exponentially.
  - Example: Sorting algo: Bubble sort and insertion sort.

---

# How to find the complexity of an algorithm:

There are three steps you want to take when calculating the complexity of an algorithm.

1. List down all the basic operations in the code.
2. Count the number of times each gets executed.
3. Sum all the counts to get an equation.

**_Example of finding the complexity of a for loop_**

```
const myArray = [1,2,3,4,5]; // O(1)

for(let n=0; n < 10; n++){ // O(n + 2)
	console.log(`Current iteration ${n}`); // O(n)
};
```

| Operation                             | Number of executions |
| ------------------------------------- | -------------------- |
| myArray                               | 1                    |
| let n=0                               | 1                    |
| n < 10                                | n + 1                |
| n++                                   | n                    |
| console.log(`current iteration ${n}`) | n                    |

**Total runtime breakdown** : 1 + 1 + (n + 1) + n + n = 3n + 3 => **O(n)**

**_General tips for complexity analysis_**

- Every time a list or array gets iterated over x length times, it is most likely O(n) time.
- Whenever you see a problem where the number of elements in the **problem space** gets halved each time, it will most likely be in O(log n) runtime.
- Whenever you have a singly nested loop, the problem is most likely in quadratic, O(n^2) time.

| Data Structure               | Insert                                         | Retrieve          | Additional Notes                                    |
| ---------------------------- | ---------------------------------------------- | ----------------- | --------------------------------------------------- |
| Array                        | O(1)                                           | O(1)              | N/A                                                 |
| Linked List                  | Insert at tail: O(n) <br> Insert at head: O(1) | O(n)              | Insert at head can make insert O(1)                 |
| Binary Tree                  | O(n)                                           | O(n)              | In worst case, tree becomes a linked-list           |
| Dynamic Array                | O(1)                                           | O(1)              | Retrieving implies retrieving from a specific index |
| Stack                        | Push: O(1)                                     | Pop: O(1)         | Last-in, last-out principle                         |
| Queue                        | Enqueue: O(1)                                  | Dequeue: O(1)     | N/A                                                 |
| Priority Queue (Binary Heap) | Insert: O(logn)                                | Delete: O(logn)   | Get Min/Max: O(1)                                   |
| Hash Table                   | Insert: O(n)                                   | Retrieve: O(n)    | Average case for insertion and retrieval is O(1)    |
| B-Trees                      | Insert: O(logn)                                | Retrieve: O(logn) | N/A                                                 |
| Red-Black Trees              | Insert: O(logn)                                | Retrieve: O(logn) | N/A                                                 |

| Sorting / Searching Algorithm   | Time Complexity   | Additional Notes                               |
| ------------------------------- | ----------------- | ---------------------------------------------- |
| Bubble sort                     | O(n²)             |                                                |
| Insertion sort                  | O(n²)             |                                                |
| Selection sort                  | O(n²)             |                                                |
| Quick sort                      | O(n²)             | Note: Quick sort's average case is O(n log n). |
| Merge sort                      | O(n log n)        |                                                |
|                                 |                   |                                                |
| Tree Algorithm                  | Time Complexity   | Additional Notes                               |
| ------------------------------- | ----------------- | ------------------                             |
| Depth first search              | O(n)              | n is the total number of nodes in the tree.    |
| Breadth first search            | O(n)              | n is the total number of nodes in the tree.    |
| Pre-order traversal             | O(n)              | n is the total number of nodes in the tree.    |
| In-order traversal              | O(n)              | n is the total number of nodes in the tree.    |
| Post-order traversal            | O(n)              | n is the total number of nodes in the tree.    |
