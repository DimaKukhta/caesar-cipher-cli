const { Transform } = require('stream');
const crypt = require('./../caesar');

const updateTextStream = new Transform({
  transform(chunk, encoding = 'utf-8', callback) {
    chunk = crypt(chunk.toString(), +shift, action);
    callback(null, chunk);
  }
})

module.exports = updateTextStream;