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

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prefixSum = 0;
    let map = new Map<number, ListNode>();

    for (let node = dummy; node !== null; node = node.next) {
        prefixSum += node.val;
        map.set(prefixSum, node);
    }

    prefixSum = 0;
    for (let node = dummy; node !== null; node = node.next) {
        prefixSum += node.val;
        node.next = map.get(prefixSum)!.next; // Connect to the next node that makes the prefix sum unique
    }

    return dummy.next;
}