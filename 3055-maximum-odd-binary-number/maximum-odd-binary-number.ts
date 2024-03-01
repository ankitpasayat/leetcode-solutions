function maximumOddBinaryNumber(s: string): string {
    return '1'.repeat(s.split('').filter((v: string) => v === '1').length - 1) + '0'.repeat(s.split('').filter((v: string) => v === '0').length) + '1';
};