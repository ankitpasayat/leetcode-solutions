function makeGood(s: string): string {
    const stack = [];
    for (const char of s) {
        if (stack.length > 0 && Math.abs(char.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
};