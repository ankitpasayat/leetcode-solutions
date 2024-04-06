function minRemoveToMakeValid(s: string): string {
    const stack = [];
    const splitted_str = s.split("");
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(") stack.push(i);
        else if (char === ")") {
            if (stack.length === 0) {
                splitted_str[i] = "";
            } else {
                stack.pop();
            }
        }
    }
    for (let i = 0; i < stack.length; i++) {
        const char = stack[i];
        splitted_str[char] = "";
    }

    return splitted_str.join("");
};