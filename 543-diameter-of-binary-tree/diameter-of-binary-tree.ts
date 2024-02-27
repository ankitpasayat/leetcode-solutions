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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let d = 0
    function helper(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        let l = helper(node.left);
        let r = helper(node.right);
        d = Math.max(d, l + r);
        return 1 + Math.max(l, r);
    }
    helper(root);
    return d;
};