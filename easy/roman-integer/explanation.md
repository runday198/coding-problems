# Intuition

1. We will have to create some kind of reference table to map the Roman numerals to their corresponding integer values.
2. We have to compare two consecutive characters to each other to determine if we should do subtraction or addition
3. We will need to iterate over the input string
4. We will need an outer scoped variable to keep the sum across the iterations and return it in the end.

# Approach

For a reference table, I was debating between a Map and an object and in the end decided on creating an object and storing Roman numerals and their integer values as key-value pairs, as their lookup times are quite similar and object notation looks more natural in my opinion.

I created two variables, `returnVal` as a sum that will eventually be returned, and `prevVal` that will act as a storage for the last Roman numeral we encountered.

Instead of doing a loop from left to right, I did it from right to left. This way I can determine when to subtract and when to add in a more understandable manner.

On the first character, we just add to the `returnVal` and update the `prevVal` with the current Roman numeral. On subsequent iterations, we check if the previous value is larger or smaller than the current one, and we perform a subtraction or addition, respectively. In both cases, we update `prevVal` with the current Roman character.

In the end we return `returnVal`

NOTE: This algorithm will only work for valid Roman numerals, which is guaranteed for this coding challenge.

# Complexity

- Time complexity:
  $$O(n)$$
- Space complexity:
  $$O(1)$$
