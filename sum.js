// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
const arguments = process.argv.slice(2);
console.log('arguments:', arguments);

// Edge case: We need at least 2 arguments.
if (arguments.length < 2) {
  console.log(`Please add at least 2 command-line arguments`);
  process.exit();
}

const convertToNum = function (numbers) {
  const outputArr = [];

  for (let nb of numbers) {
    outputArr.push(Number(nb));
  }

  return outputArr;
};

// goes through each
// for let i = 0 => c-style loop
// for of
// for each

const sum = function (numbers) {
  let total = 0;
  console.log('numbers', numbers);
  for (let nb of numbers) {
    // prints out the sum of them
    // Edge case: If any argument is not a number, output an error message.
    // Edge Case: If any argument is not a whole number, skip it
    // if (Number(nb) % 1 === 0) {

    // const convertedNb = Number(nb);

    if (isNaN(nb)) {
      console.log(`Error: please input only numbers`);
      process.exit(); // exit the script
    }

    if (Number.isInteger(nb)) {
      // typecast
      total += nb;
    }

    console.log('nb:', nb, 'total:', total);
  }
  return total;
};

const result = sum(convertToNum(arguments));

console.log('Result:', result);
