function minimumLength(s: string): number {
    let l = 0, r = s.length - 1;
    while (l < r && s[l] === s[r]) {
        let ch = s[l];
        while (l <= r && s[l] === ch) {
            l += 1;
        }
        while (l <= r && s[r] === ch) {
            r -= 1;
        }
    }
    return (l > r) ? 0 : r - l + 1;
};