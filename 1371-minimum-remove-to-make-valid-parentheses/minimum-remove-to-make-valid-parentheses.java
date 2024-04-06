class Solution {
    public String minRemoveToMakeValid(String s) {
        StringBuilder R = new StringBuilder();
        int open = 0, close = 0;
        for (char ch : s.toCharArray()) {
            if (Character.isAlphabetic(ch)) {
                R.append(ch);
            } else if (ch == '(') {
                open++;
                R.append(ch);
            } else {
                if (open > close) {
                    R.append(ch);
                    close++;
                } else {
                    open = open < 0 ? 0 : open--;
                }
            }
        }
        s = R.toString();
        R.setLength(0);
        int n = s.length();
        open = close = 0;

        for (int i = n - 1; i >= 0; i--) {
            char ch = s.charAt(i);
            if (Character.isAlphabetic(ch)) {
                R.insert(0, ch);
            } else if (ch == ')') {
                R.insert(0, ch);
                close++;
            } else {
                if (close > open) {
                    R.insert(0, ch);
                    open++;
                } else {
                    close = close < 0 ? 0 : close--;
                }
            }
        }
        return R.toString();
    }
}