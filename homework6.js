//EXERCISE 1
function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2); // Fn-1 + Fn-2
  }

  
  //EXERCISE 3
  const squareList = arr => {
    const positiveIntegers = arr.filter(num => {
      return num >= 0 && Number.isInteger(num);
    });
    const squaredIntegers = positiveIntegers.map(num => {
      return num ** 2;
    });
    return squaredIntegers;
  };

  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
  