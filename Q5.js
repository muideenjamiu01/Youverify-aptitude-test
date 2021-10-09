// one Away: there are three types of edits that can be performed on strings:
//  insert a character,remove a character, or replace a character. given two strings, write a function to check if they are one edit (or zero edit) away.

function oneAway(str1, str2) {
    // Check for identical strings
    if (str1 === str2) {
        return true;
    }
    // Check length diff is not more that one char
    if (Math.abs(str2.length - str1.length) > 1) {
        return false;
    }
    // If first characters are equal, check following substring
    if (str1[0] === str2[0]) {
        return oneAway(str1.slice(1), str2.slice(1));
    } else {
        // Check first character edition
        if (str1.length === str2.length && str1 === str1[0] + str2.slice(1)) {
            return true;
        }
        // Check first character deletion
        else if (str1.length > str2.length && str1 === str1[0] + str2) {
            return true;
        }
        // Check first character insertion
        else if (str1.length < str2.length && str1 === str2.slice(1)) {
            return true;
        }
    }
    return false;
}

console.log(oneAway('pale', 'pae')) //true
console.log(oneAway('pale', 'pales')) //true
console.log(oneAway('pale', 'bale')) //true
console.log(oneAway('pale', 'bake')) //flase