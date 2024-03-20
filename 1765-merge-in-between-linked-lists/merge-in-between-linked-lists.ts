/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let ptr = list1;
    for (let i = 0; i < a - 1; ++i)
        ptr = ptr.next;
    let qtr = ptr.next;
    for (let i = 0; i < b - a + 1; ++i)
        qtr = qtr.next;
    ptr.next = list2;
    while (list2.next)
        list2 = list2.next;
    list2.next = qtr;
    return list1;
};