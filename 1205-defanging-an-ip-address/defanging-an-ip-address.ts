function defangIPaddr(Ip: string): string {
    let ans: any = [];
    Ip.split('');
    for (let i = 0; i < Ip.length; i++) {
        if (Ip[i] === ".") {
            ans.push("[.]");
        }
        else {
            ans.push(Ip[i]);
        }
    }
    return ans.join('');
};