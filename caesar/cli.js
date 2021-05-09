const { pipeline} = require('stream');

const cli = (readableStream, wtitableStream, transormStream) => {
    pipeline(
        readableStream,
        transormStream,
        wtitableStream,
        (err) => {
            if (err) {
                process.stderr.write('Error: input / output / transform error');
                process.exit(1);
            }
        }
    ).on('close', () => {
        wtitableStream.close();
    })
}

module.exports = cli;