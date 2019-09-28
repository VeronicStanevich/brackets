module.exports = function check(str, bracketsConfig) {
    const bracketsStack = [];
    const stringChars = str.split('');
    const bracketsMap = new Map(bracketsConfig);

    for (const char of stringChars) {
        const isOpenCharSameAsClose = bracketsMap.get(char) === char;

        if (bracketsMap.has(char) &&
            !(isOpenCharSameAsClose && bracketsStack.includes(char))) {
            bracketsStack.push(char);
        } else {
            const lastBracket = bracketsStack.pop();
            if (char !== bracketsMap.get(lastBracket)) {
                return false;
            }
        }
    }

    return !bracketsStack.length;
};
