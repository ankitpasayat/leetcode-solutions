function maximumOddBinaryNumber(s: string): string {
    let ones: number = 0;
    for (const ch of s) {
        if (ch === "1") {
            ones += 1;
        }
    }
    return "1".repeat(ones - 1) + "0".repeat(s.length - ones) + "1";
};