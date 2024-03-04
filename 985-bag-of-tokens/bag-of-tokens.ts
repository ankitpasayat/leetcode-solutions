function bagOfTokensScore(tokens: number[], power: number): number {
    let score = 0;
    if (!tokens.length) {
        return score;
    }
    tokens.sort((a, b) => a - b);
    if (power < tokens[0]) {
        return score;
    }
    let i = 0;
    let j = tokens.length - 1;
    while (i <= j) {
        const current = tokens[i];
        if (power >= current) {
            power -= current;
            score += 1;
            i += 1;
            continue;
        }
        if (score && j - i > 1) {
            power += tokens[j];
            score -= 1;
            j -= 1;
            continue;
        }
        return score;
    }
    return score;
};