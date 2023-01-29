/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const pattern = {b: 0, a: 0, l: 0, o: 0, n: 0};

    for (let i = 0; i < text.length; i++) {
        if ('balloon'.includes(text[i])) {
            pattern[text[i]]++;
        }
    }

    return Math.floor(Math.min(pattern.b, pattern.a, pattern.l / 2, pattern.o / 2, pattern.n));
};
