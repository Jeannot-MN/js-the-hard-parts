function reverseWordsInString(string) {
    let reverse = '';
    let currentWord = '';

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] === ' ') {
            reverse += currentWord + ' ';
            currentWord = '';
        } else {
            currentWord = string[i] + currentWord;
        }
    }

    return reverse + currentWord;
}