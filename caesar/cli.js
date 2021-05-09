const { pipeline} = require('stream');

const cli = (readableStream, wtitableStream, transormStream) => {

    /*readableStream.on('error', () => {
        process.stderr.write('Error: Input file not found');
    });

    wtitableStream.on('error', () => {
        process.stderr.write('Error: Output file not found');
    })*/

    pipeline(
        readableStream,
        transormStream,
        wtitableStream,
        (err) => {
            if (err) {
                process.stderr.write('Error file not found');
                process.exit(1);
            }
        }
    ).on('close', () => {
        wtitableStream.close();
    })
}

module.exports = cli;