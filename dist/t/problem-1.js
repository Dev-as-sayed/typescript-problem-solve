"use strict";
{
    // Problem 1:
    function repeatString(inputString, times) {
        let repeatedString = "";
        for (let i = 0; i < times; i++) {
            repeatedString += inputString;
        }
        console.log(repeatedString);
    }
    repeatString("hlw!", 3);
}
