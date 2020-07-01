// The command line program accepts the third argument as input
// Example:
// npm start
// npm start a5c3c0

function map(n) {
  switch (n) {
    case '1':
      return 1;
    case '2':
      return 2;
    case '3':
      return 3;
    case '4':
      return 4;
    case '5':
      return 5;
    case '6':
      return 6;
    case '7':
      return 7;
    case '8':
      return 8;
    case '9':
      return 9;
    case '0':
      return 0;
    default:
      return undefined;
  }
}

function main(input) {
  const firstIndex = input.search(/[1-9]/);
  const matches = input.substring(firstIndex).split('').reverse();
  let result = 0,
    index = 0;
  matches.forEach((number) => {
    if (map(number) !== undefined) {
      result += map(number) * Math.pow(10, index);
      index++;
    }
  });
  return result;
}

const input = process.argv.length > 2 ? process.argv[2] : 'abc573';

console.log(main(input));
