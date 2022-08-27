function balancedBrackets(string) {
    const openingBrackets = new Set(['[', '{', '(']);
    const bracketPairs = {
        ']': '[',
        '}': '{',
        ')': '(',
    }
    const pendingOpenBrackets = [];

    for (const char of string) {
        if (openingBrackets.has(char)) {
            pendingOpenBrackets.push(char);
        } else if (bracketPairs[char]) {
            if (bracketPairs[char] === pendingOpenBrackets[pendingOpenBrackets.length - 1]) {
                pendingOpenBrackets.pop();
            } else {
                return false;
            }
        }
    }

    return pendingOpenBrackets.length === 0;
}