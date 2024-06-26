const myArrayUtils =require('package_ravi67');
console.log(myArrayUtils.sumArray([1, 2, 3, 4])); // Should output 10

// Test clearDuplicates
console.log(myArrayUtils.clearDuplicates([1, 2, 2, 3, 4, 4])); // Should output [1, 2, 3, 4]

// Add more tests for other functions
console.log(myArrayUtils.average([1, 2, 3, 4])); // Should output 2.5
console.log(myArrayUtils.max([1, 2, 3, 4])); // Should output 4
console.log(myArrayUtils.min([1, 2, 3, 4])); // Should output 1
console.log(myArrayUtils.sortAsc([4, 3, 2, 1])); // Should output [1, 2, 3, 4]
console.log(myArrayUtils.sortDesc([1, 2, 3, 4])); // Should output [4, 3, 2, 1]
console.log(myArrayUtils.median([1, 2, 3, 4])); // Should output 2.5
console.log(myArrayUtils.mode([1, 2, 2, 3, 4])); // Should output 2
console.log(myArrayUtils.range([1, 2, 3, 4])); // Should output 3
console.log(myArrayUtils.variance([1, 2, 3, 4])); // Should output 1.25
console.log(myArrayUtils.standardDeviation([1, 2, 3, 4]));