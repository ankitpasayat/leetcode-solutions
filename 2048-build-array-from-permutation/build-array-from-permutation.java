class Solution {
    public int[] buildArray(int[] nums) {
        ArrayList<Integer> ans = new ArrayList<>();
        for (int num : nums) {
            ans.add(nums[num]); // Adding the element itself, not nums[num]
        }

        // Convert ArrayList<Integer> to int[]
        int[] result = new int[ans.size()];
        for (int i = 0; i < ans.size(); i++) {
            result[i] = ans.get(i);
        }
        return result;
    }
}