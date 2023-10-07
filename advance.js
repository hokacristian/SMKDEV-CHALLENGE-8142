const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input number: ', (input_number) => {
  input_number = parseInt(input_number);

  for (let i = 1; i <= input_number; i++) {
    const cube = i * i * i;
    console.log(`Current Number is: ${i} and the cube is ${cube}`);
  }

  rl.close();
});
