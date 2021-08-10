// Using JS ES6 Set object lets us store unique values of any type.
// Since the result would be a set and we need an array, the Array.from() static method creates a new, shallow-copied Array instance from a give Set.
// ES6 sets are iterated in insertion order, so this code preserves the order of the original array.
// Other alternatives would be to iterate (or use reduce()) and check index of previous similar values, sort and then check previous and next index values, an arrow function with destructuring of set etc..
// I used this method because it is simple, self explanatiory, fast, allows us to use values of any type, whether primitive values or object references, and it keeps the same order for the given array.

function duplicate(inputArr) {
  return Array.from(new Set(inputArr));
}

export default duplicate;
