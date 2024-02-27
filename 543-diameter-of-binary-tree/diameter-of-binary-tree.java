/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    int d = 0;

    public int diameterOfBinaryTree(TreeNode root) {
        if (root == null)
            return 0;
        height(root);
        return d;
    }

    public int height(TreeNode root) {
        if (root == null) {
            return -1;
        }
        int l = height(root.left);
        int r = height(root.right);
        d = Math.max(d, l + r + 2);
        return 1 + Math.max(l, r);
    }
}