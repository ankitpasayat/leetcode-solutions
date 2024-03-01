function maximumOddBinaryNumber(s: string): string {
    let zero = "", one = "";
    for (const ch of s) {
        if (ch === "0") {
            zero += "0";
        }
        else {
            one += "1";
        }
    }
    if (one === "") {
        return s;
    }
    return one.substring(1).concat(zero).concat("1").trim();
};