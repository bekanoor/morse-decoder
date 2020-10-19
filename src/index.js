const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let result = '';

    for(let i = 0; i < expr.length + 1; i += 10) { 
        if(expr.substring(i, i + 10) !== '') {
            arr.push(expr.substring(i, i + 10))
        }
    }  

    arr.map(item => {
    let temp = '';
    for(let i = 0; i < item.length - 1; i += 2) {
        if(item[i] + item[i + 1] === '10') {
            temp += '.';
        } else if (item[i] + item[i + 1] === '11') {
            temp += '-';
        } else if(item[i] === '*') {
            temp += ' ';
            break;
        }
    }

        temp === ' ' ? result += ' ' : result += MORSE_TABLE[temp];
    })

    return result;
}

module.exports = {
    decode
}