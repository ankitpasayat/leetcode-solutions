class Solution {
    public int[] buildArray(int[] nums) {
        helper(nums, 0);
        return nums;
    }

    void helper(int[] nums, int start) {
        if (start < nums.length) {
            int temp = nums[start];
            int result = nums[temp];
            helper(nums, start + 1);
            nums[start] = result;
        }
    }
}