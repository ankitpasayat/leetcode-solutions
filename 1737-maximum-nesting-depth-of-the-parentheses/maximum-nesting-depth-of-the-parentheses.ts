function maxDepth(s: string): number {
    let count = 0;
    let maxNum = 0;
    for (let c of s) {
        if (c === '(') {
            count += 1;
            if (maxNum < count)
                maxNum = count;
        } else if (c === ')') {
            count -= 1;
        }
    }
    return maxNum;
};