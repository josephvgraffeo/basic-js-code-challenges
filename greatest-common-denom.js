/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function gcdOfStrings (str1, str2) {
    let commonDenom = "";
    for (let i = 0; i < str1.length && i < str2.length; i++) {
        if (str1[i] === str2[i]) {
            commonDenom += str1[i];
        } else {
            break
        };
    };
    return commonDenom;
};

console.log(gcdOfStrings("ABABAB", "ABAB"));