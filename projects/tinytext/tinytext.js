/* 
This program takes in a string and converts it to tinytext. Currently supported are the latin alphabet and digits 0-9 with some operators. 
There are currently no plans to expand this alphabet.
*/

const charConvert = (char) => {
    // This crosswalk object is essentially the dictionary for translating normal english letters and numbers into their tinytext equivalents. 
    const crosswalk = {
        // Lowercase letters
        'a': '\u1D43',
        'b': '\u1D47',
        'c': '\u1D9C',
        'd': '\u1D48',
        'e': '\u1D49',
        'f': '\u1DA0',
        'g': '\u1D4D',
        'h': '\u02B0',
        'i': '\u2071',
        'j': '\u02b2',
        'k': '\u1D4F',
        'l': '\u02E1',
        'm': '\u1D50',
        'n': '\u207F',           
        'o': '\u1D52',
        'p': '\u1D56',
        'q': '\u1d4c',
        'r': '\u02B3',
        's': '\u02E2',
        't': '\u1D57',
        'u': '\u1D58',
        'v': '\u1D5B',
        'w': '\u02B7',
        'x': '\u02E3',
        'y': '\u02B8',
        'z': '\u1DBB',
        ' ': '\u0020',

        // Uppercase letters
        'A': '\u1D2C',
        'B': '\u1D2E',
        'C': '\u1D9C',
        'D': '\u1D30',
        'E': '\u1D31',
        'F': '\u1DA0', // Need a small capital version
        'G': '\u1D33',
        'H': '\u1D34',
        'I': '\u1DA6', //1D35 is bigger but stil small caps
        'J': '\u1D36',
        'K': '\u1D37',
        'L': '\u1DAB', //1D38
        'M': '\u1D39',
        'N': '\u1DB0', //1D3A
        'O': '\u1D3C',
        'P': '\u1D3E', //1D3E 1D18
        'Q': '\u1d4c', // Need a small capital version
        'R': '\u1D3F',
        'S': '\uA731',
        'T': '\u1D40',
        'U': '\u1DB8', //1D41
        'V': '\u2C7D',
        'W': '\u02E3', // Need a small capital version
        'X': '\u02B8', // Need a small capital version
        'Y': '\u1DBB', // Need a small capital version
        'Z': '\uA731',

        // Numbers
        '0': '\u2070',
        '1': '\u00B9',
        '2': '\u00B2',
        '3': '\u00B3',
        '4': '\u2074',
        '5': '\u2075',
        '6': '\u2076',
        '7': '\u2077',
        '8': '\u2078',
        '9': '\u2079',
        '+': '\u207A',
        '-': '\u207B',
        '=': '\u207C',
        '(': '\u207D',
        ')': '\u207E',

    }
    // This will return the character's tinytext equivalent. If there is none, then it will simply return the original character that it was passed. 
    return (crosswalk[char] ?? char); 
}

//
const messageGenerator = (name) => {
    let tinyString = '';
    for (let i = 0; i < name.length; i++) {
        tinyString += (charConvert(name[i]));
    }
    return tinyString;    
}



function convert() {
    let textToConvert = document.getElementById('input-text').value;
    let returnedText = document.getElementById('returned-text');
    returnedText.innerHTML = messageGenerator(textToConvert);
    // returnedText.innerHTML = "Did this work?";
}

// Execute the convert function if the 'Submit' button is pressed.
let submitButton = document.getElementById('submit-button');
submitButton.addEventListener("click", convert);

// Execute the convert function if the 'Enter' key is pressed. 
// This event fires on any keypress but checks if the keypress is 'Enter',
// and if so, then it executes the convert function. 
let textEntry = document.getElementById('input-text');
textEntry.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        console.log("Enter was pressed");
        convert();
    }
});

// Example string which can be used to diagnose any issues with the crosswalk. 
document.getElementById('available-letters').innerHTML = messageGenerator('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+-=()')