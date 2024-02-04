// exports.isCharacterMatch = function(string1, string2) {

// };

// exports.anagramsFor = function(word, listOfWords) {

// };

function isCharacterMatch(string1, string2){
    
    let match1 = ""
    let match2 = ""

    for (const char of string1.toLowerCase()) {
        if (char.match(/[a-z0-9]/) && string2.toLowerCase().includes(char)) {
            match1 += char;
        }
    }
    
    for (const char of string2.toLowerCase()) {
        if (char.match(/[a-z0-9]/) && string1.toLowerCase().includes(char)) {
            match2 += char;
        }
    }

    if (match1.length == match2.length) {
        return true;
    } else {
        return false;
    }
}

function anagramsFor(word, listOfWords) {
    
    let result = []
    
    for (const item of listOfWords) {
        let matches = "";
        for (const char of item) {
            if (word.includes(char)) {
                matches += char
            }
        }
        if (matches.length == word.length) {
            result.push(matches);
        }
    }
    return result;
}

module.exports = { isCharacterMatch, anagramsFor };