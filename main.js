// The command line program accepts the third argument as input
// Example: node main.js abc573

function main(input) {
  const matches = input.match(/\d/g);
  return matches ? matches.join('') * 1 : null;
}

const input = process.argv.length > 2 ? process.argv[2] : 'abc573';

console.log(main(input));
