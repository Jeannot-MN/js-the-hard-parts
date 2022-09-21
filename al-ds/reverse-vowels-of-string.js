var reverseVowels = function(s) {
    let lp = 0,
        rp = s.length - 1;
    let str = s.split("");

    while (lp < rp) {
        if (isVowel(str[lp]) && isVowel(s[rp])) {
            [str[lp], str[rp]] = [str[rp], str[lp]];
            lp++;
            rp--;
        } else if (!isVowel(str[lp])) {
            lp++;
        } else if (!isVowel(str[rp])) {
            rp--;
        }
    }

    return str.join("");
};

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

function isVowel(char) {
    return VOWELS.has(char);
}