// main.js

const myModule = require('/Users/guddukumar/Documents/MINOR PROJECT/export_module.js').default;

console.log(myModule.add(2, 3));  // Using the add function
console.log(myModule.PI);          // Accessing the constant
console.log(myModule.myObject);    // Accessing the exported object
