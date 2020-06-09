'use strict';

function multiBracketValidation(bracketStrind) {

    var openBracket = 0;
    var closeBracket = 0;
    var openParan = 0;
    var closeParan = 0;
    var opencurly = 0;
    var closecurly = 0;

    for (let i = 0; i < bracketStrind.length; i++) {

        if (bracketStrind.charAt(i) === '[') {
            openBracket++
        }
        if (bracketStrind.charAt(i) === '(') {
            openParan++
        }
        if (bracketStrind.charAt(i) === '{') {
            opencurly++
        }
        if (bracketStrind.charAt(i) === ']') {
            closeBracket++
        }
        if (bracketStrind.charAt(i) === ')') {
            closeParan++
        }
        if (bracketStrind.charAt(i) === '}') {
            closecurly++
        }
    }
    //     console.log(closecurly)
    // console.log(closeBracket)
    // console.log(closeParan)
    if (closecurly === opencurly && openParan === closeParan && openBracket === closeBracket) {
        return true;
    } else {
        return false;
    }
}

// multiBracketValidation('(())[[asdas]]{}}')''

module.exports = multiBracketValidation;