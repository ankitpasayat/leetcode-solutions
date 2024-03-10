function intersection(nums1: number[], nums2: number[]): number[] {
    let result = [];
    let setNum1 = new Set(nums1);
    let setNum2 = new Set(nums2);
    let [smallSet, largeSet] = (setNum1.size < setNum2.size) ? [setNum1, setNum2] : [setNum2, setNum1];
    smallSet.forEach(num => {
        largeSet.has(num) && result.push(num);
    });
    return result;
};