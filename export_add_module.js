// myModule.js

// Export a single function
function add(a, b) {
  return a + b;
}
const _add = add;
export { _add as add };

export const PI = 3.14159;

export const myObject = { key: 'value' };

// myModule.js

function subtract(a, b) {
  return a - b;
}

export default {
  subtract,
  multiply: (a, b) => a * b,
};
