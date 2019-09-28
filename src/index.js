module.exports = function check(str, bracketsConfig) {
    const bracketsStack = [];
    const stringChars = str.split('');
    const bracketsMap = Object.fromEntries(bracketsConfig);

    for (const char of stringChars) {
        const isOpenCharSameAsClose = bracketsMap[char] === char;

        if (bracketsMap[char] &&
            !(isOpenCharSameAsClose && bracketsStack.includes(char))) {
            bracketsStack.push(char);
        } else {
            const lastBracket = bracketsStack.pop();
            if (char !== bracketsMap[lastBracket]) {
                return false;
            }
        }
    }

    return !bracketsStack.length;
};
