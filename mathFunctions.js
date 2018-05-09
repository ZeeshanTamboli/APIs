const integers = [1, 2, 3, 4, 5, 6];

module.exports = {
  addition(a, b) {
    return new Promise((resolve, reject) => {
      if (
        typeof a === 'number' &&
        typeof b === 'number' &&
        !isNaN(a) &&
        !isNaN(b)
      ) {
        resolve(`Addition of two numbers is ${a + b}`);
      } else {
        reject('Both Parameters should be numbers');
      }
    });
  },
  subtraction(a, b) {
    return new Promise((resolve, reject) => {
      if (
        typeof a === 'number' &&
        typeof b === 'number' &&
        !isNaN(a) &&
        !isNaN(b)
      ) {
        resolve(`Subtraction of two numbers is ${a - b}`);
      } else {
        reject('Both Parameters should be numbers');
      }
    });
  },
  multiplication(a, b) {
    return new Promise((resolve, reject) => {
      if (
        typeof a === 'number' &&
        typeof b === 'number' &&
        !isNaN(a) &&
        !isNaN(b)
      ) {
        resolve(`Multiplication of two numbers is ${a * b}`);
      } else {
        reject('Both Parameters should be numbers');
      }
    });
  },
  division(a, b) {
    return new Promise((resolve, reject) => {
      if (
        typeof a === 'number' &&
        typeof b === 'number' &&
        !isNaN(a) &&
        !isNaN(b)
      ) {
        resolve(`Division of two numbers is ${a / b}`);
      } else {
        reject('Both Parameters should be numbers');
      }
    });
  },
  square() {
    return new Promise((resolve, reject) => {
      const square = integers.map(integer => integer * integer);
      resolve(`Square of the numbers: ${square}`);
    });
  }
};
