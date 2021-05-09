const program = require('commander');

program
  .storeOptionsAsProperties()
  .version('1.0.0')
  .option('-a, --action <string>', 'type of action', '')
  .option('-s, --shift <number>', 'shift', 0)
  .option('-i, --input <string>', 'input file', '')
  .option('-o, --output <string>', 'output file', '')
  .parse(process.argv);

module.exports = {
    action, shift, input, output
} = program.opts();