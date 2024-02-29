/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isEvenOddTree(root: TreeNode | null): boolean {
    if (root === null) {
        return true;
    }
    let queue = [root];
    let flag = true;
    while (queue.length > 0) {
        let size = queue.length;
        let prev = flag ? -Infinity : Infinity;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (flag) {
                if (node.val % 2 === 0 || node.val <= prev) {
                    return false;
                }
            } else {
                if (node.val % 2 !== 0 || node.val >= prev) {
                    return false;
                }
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            prev = node.val;
        }
        flag = !flag;
    }
    return true;
};