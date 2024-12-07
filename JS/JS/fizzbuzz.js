const qwer = (firstNumber, lastNumber) => {
  let result = firstNumber;
  for (let i = firstNumber; i <= lastNumber; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
qwer(11, 20);
