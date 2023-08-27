# What is Big O Notation?

Big O Notation is what's used in computer science to measure the speed and efficiency of an algorithm. Similar to cars, which use MPG to dictate a cars efficency, given a users input to the gas petal during the duration of the trip, as a form of measurement - big O notation measures the efficiency of a computer algorithm.

With Big O Notation, you express the runtime in terms of how quickly it grows relative to the size of the input. Essentially, it's a way to draw insights into how scalable an algo is.

It doesn't necessarily tell you how **fast** or **slow** an algo will run, but instead how it changes with the respect to its input size.

# What is space and time complexity?

Time complexity and space complexity are essentially approximations of how much **time** and how much **space** an algorithm will take to process certain inputs respectively.

There are three tiers to solve for (best case, average case, and worst case) which are known as asymptotic notions. [Big Omega, Big Theta, and Big O Notation].

Developers typically solve for the worst case scenario, Big O, because you’re not expecting your algorithm to run in the best or even average cases. It allows you to make analytical statements such as, “well, in the worst case scenario, my algorithm will scale this quickly”.

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
