function finalValueAfterOperations(operations: string[]): number {
    let result: number = 0;
    for (const operation of operations) {
        switch (operation[1]) {
            case '+':
                result += 1;
                break;
            default:
                result -= 1;
        }
    }
    return result;
};