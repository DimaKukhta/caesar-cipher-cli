const fs = require('fs');

const error = (action, shift, input, output) => {
    if ((!action || action !== 'encode' && action !== 'decode') || (!+shift && +shift !== 0)) {
        process.stderr.write("Error: You don't pass necessarily arguments for cli");
        process.exit(1);
    }

    if (input && output) {
        if (input === output) {
            process.stderr.write('Error: Input file and Output file have the same name');
            process.exit(1);
        }
    }

    if (input) {
        fs.access(input, fs.F_OK, (err) => {
            if (err) {
                process.stderr.write('Error: File input not found');
                process.exit(1);
            }
        });
    }

    if (output) {
        fs.access(output, fs.F_OK, (err) => {
            if (err) {
                process.stderr.write('Error: File output not found');
                process.exit(1);
            }
        });
    }
}

module.exports = error;