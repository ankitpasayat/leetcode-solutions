class Solution {
    public int numIdenticalPairs(int[] nums) {
        int count = 0;
        HashMap<Integer, Integer> seen = new HashMap<>();
        for (int num : nums) {
            int temp = seen.getOrDefault(num, 0);
            count += temp;
            seen.put(num, temp + 1);
        }
        return count;
    }
}