class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int res = 0;
        for (String operation : operations) {
            switch (operation.charAt(1)) {
                case '+':
                    res += 1;
                    break;
                default:
                    res -= 1;
            }
        }
        return res;
    }
}