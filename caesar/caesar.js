const toAlhpabetNumber = require('./utils');


const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
const UpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const crypt = (str, stuff, action) => {
    const strSplit = str.split('');
    const result = [];
    for (let i = 0; i < strSplit.length; i++) {
        let isUpperCase = true;
        let index = lowerLetters.indexOf(strSplit[i]);
        index !== -1 ? isUpperCase = false : isUpperCase;
        if (index === -1) {
            index = UpperLetters.indexOf(strSplit[i]);
        }
        if (index === -1) {
            result.push(strSplit[i]);
        } else {
            let indexWithStuff = index;
            if (action === 'encode') {
                indexWithStuff = toAlhpabetNumber(index + stuff);
            } else if (action === 'decode') {
                indexWithStuff = toAlhpabetNumber(index - stuff);
            }
            isUpperCase ? result.push(UpperLetters[indexWithStuff]) : result.push(lowerLetters[indexWithStuff])
        }
    }
    return result.join('');
}

module.exports = crypt;

