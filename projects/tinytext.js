/* 
This program is supposed to generate a randomized text output every time they start the program. 
Instead, we're going to take in a string and convert it to tinytext. 


*/

const charConvert = (char) => {
    //console.log(char);
    switch (char) {
        case ('a'): return '\u1D43';
        case ('b'): return '\u1D47';
        case ('c'): return '\u1D9C';
        case ('d'): return '\u1D48';
        case ('e'): return '\u1D49';
        case ('f'): return '\u1DA0';
        case ('g'): return '\u1D4D';
        case ('h'): return '\u02B0';
        case ('i'): return '\u2071';
        case ('j'): return '\u02b2';
        case ('k'): return '\u1D4F';
        case ('l'): return '\u02E1';
        case ('m'): return '\u1D50';
        case ('n'): return '\u1D3A'; //There is no small letter 'n', it seems.            
        case ('o'): return '\u1D52';
        case ('p'): return '\u1D56';
        case ('q'): return '\u1d4c6';
        case ('r'): return '\u02B3';
        case ('s'): return '\u02E2';
        case ('t'): return '\u1D57';
        case ('u'): return '\u1D58';
        case ('v'): return '\u1D5B';
        case ('w'): return '\u02B7';
        case ('x'): return '\u02E3';
        case ('y'): return '\u02B8';
        case ('z'): return '\u1DBB';
        case ('\u0020'): return ('\u0020');
        default:
            //console.log(`Untranslatable character encountered`);
            return char;
    }
}

const messageGenerator = (name) => {
    /*
    for (const char of name){
        charConvert(char);
    }
    */
    let tinyString = '';
    for (let i = 0; i < name.length; i++) {
        tinyString += (charConvert(name[i]));
    }
    return tinyString;    
}

process.stdin.on('data', (userInput) => {
    console.log(`Original input: ${userInput}`);
    stringInput = userInput.toString();
    console.log(`TinyText: ${messageGenerator(stringInput)}`);
    process.exit();
    }
);

//console.log(messageGenerator('translate this tiny text'));

let inputText = document.getElementById('input-text')

