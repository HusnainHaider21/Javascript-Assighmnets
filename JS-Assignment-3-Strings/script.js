// a) Return the length of a given string.
function getStringLength(str) {
    return str.length;
}

// b) Concatenate two strings together.
function concatenateStrings(str1, str2) {
    return str1 + str2;
}

// c) Determine if a given string is empty.
function isStringEmpty(str) {
    return str.length === 0;
}

// d) Count the number of vowels in a string.
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// e) Reverse a given string.
function reverseString(str) {
    return str.split('').reverse().join('');
}

// f) Check if a string is a palindrome.
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// g) Convert a string to uppercase.
function toUpperCase(str) {
    return str.toUpperCase();
}

// h) Find the first occurrence of a given character in a string.
function findFirstOccurrence(str, char) {
    return str.indexOf(char);
}

// i) Replace all occurrences of a given character in a string with another character.
function replaceAllOccurrences(str, charToReplace, replacementChar) {
    return str.split(charToReplace).join(replacementChar);
}

// j) Trim leading and trailing whitespace from a string.
function trimString(str) {
    return str.trim();
}

// k) Count the number of words in a string.
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// l) Check if a string contains only numeric characters.
function isNumericString(str) {
    return /^\d+$/.test(str);
}

// m) Check if a string is a valid email address.
function isValidEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
}

// n) Extract the domain name from a URL string.
function extractDomain(url) {
    const matches = url.match(/:\/\/(www\.)?([^\/:]+)/);
    return matches ? matches[2] : null;
}

// o) Convert a string into title case (the first letter of each word capitalized).
function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// p) Remove all non-alphabetic characters from a string.
function removeNonAlphabetic(str) {
    return str.replace(/[^a-zA-Z]/g, '');
}

// q) Check if a string is a valid palindrome permutation (ignoring spaces).
function isPalindromePermutation(str) {
    const charCount = {};
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    for (let char of cleanedStr) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (let key in charCount) {
        if (charCount[key] % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }
    return true;
}

// r) Check if a string is an anagram of another string.
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

// s) Find the longest word in a string.
function findLongestWord(str) {
    return str.split(/\s+/).reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

// t) Perform string compression by replacing repeated characters with the character followed by the count.
function compressString(str) {
    let compressed = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + (count > 1 ? count : '');
            count = 1;
        }
    }
    return compressed;
}
