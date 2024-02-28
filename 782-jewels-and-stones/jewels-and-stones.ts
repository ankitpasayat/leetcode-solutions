function numJewelsInStones(jewels: string, stones: string): number {
    let set = new Set([...jewels])
    let count = 0;
    for (let stone of [...stones]) {
        if (set.has(stone)) count++
    }
    return count
};