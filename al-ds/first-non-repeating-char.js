function firstNonRepeatingCharacter(string) {
    let occurences = {};

    for (let i = 0; i < string.length; i++) {
        occurences[string[i]] = occurences[string[i]] ? occurences[string[i]] + 1 : 1;
    }

    for (let i = 0; i < string.length; i++) {
        if (occurences[string[i]] === 1) return i;
    }

    return -1;
}