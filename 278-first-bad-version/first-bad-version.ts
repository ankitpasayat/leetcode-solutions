/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {

    return function (n: number): number {
        let l = 1, r = n, m = 0, res = -1;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            console.log(l, m, r);
            if (isBadVersion(m)) {
                res = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return res;
    };
};