function myFunction(arr1, arr2) {
    const newArr = [...arr1, ...arr2];
    console.log();
}

myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]);
// Expected
// [ -11, -10, 5, 22, 41,  42, 333]

// function findTwoSum(nums, target) {
//     const numIndices = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (numIndices.has(complement)) {
//             console.log(numIndices.has(complement));
//             return [complement, nums[i]];
//         }
//         numIndices.set(nums[i], i);
//         console.log(numIndices)
//     }
//     return [];
// }

// const nums = [5, 7, 2, 15];
// const target = 9;
// const result = findTwoSum(nums, target);
// console.log(result);

// // 1)
// function factorial(num) {
//     if(num < 1) return 1;
//     return num * factorial(num - 1)
// }

// console.log(factorial(5))

// 2)
// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^a-z0-9]/g,"")
//     const reverse = str.split('').reverse().join("")
//     return str === reverse
// }
// console.log(isPalindrome("A man, a plan, a canal, Panama"))

// function isPalindrome(str) {
//     const strLength = str.length;
//     for(let i=0; i<strLength; i++) {
//         if(str[i] !== str[strLength - i -1]) {
//             return "Not Palindrome"
//         }
//     }
//     return "Palindrome"
// }
// console.log(isPalindrome("asasa"))

// function sumOfPositives(arr) {
//     return arr.reduce((sum, curr) => (curr > 0 ? sum + curr : sum), 0);
// }

// const numbers = [1, -2, 3, -4, 5];
// console.log(sumOfPositives(numbers)); // Outputs: 9

// let num = 123456;
// let reverse = 0;
// while(num > 0) {
//     lastDigit = num % 10;
//     reverse = reverse *10 + lastDigit;
//     num = Math.floor(num/10)
// }
// console.log(reverse);
// if(num===reverse) {
//     console.log("no is palindrome")
// } else {
//     console.log("Not Palindrome");
// }

// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// function reverseLinkedList(head) {
//     let prev = null;
//     let current = head;
//     while (current !== null) {
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// }

// // Example usage:
// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// node1.next = node2;
// node2.next = node3;

// const reversedHead = reverseLinkedList(node1);

// console.log(reversedHead);

// function isBalanced(str) {
//     const stack = [];
//     const pairs = { '(': ')', '{': '}', '[': ']' };
//     for(const char of str) {
//         console.log(pairs[char])
//     }

// }
// console.log(isBalanced('{[()]}'));
// function flattenArray(arr) {
//     return arr.reduce((flat, item) => {
//         console.log(item)
//         if(Array.isArray(item)) {
//             console.log(Array.isArray(item));
//             return flat.concat(flattenArray(item));
//         }
//         return flat.concat(item);

//     }, [])
// }
// const nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log(flattenArray(nestedArray));

// function findIntersection(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     return [...set1].filter((item) => set2.has(item));
// }

// // Example usage:
// const array1 = [1, 2, 2, 1, 5,4];
// const array2 = [2, 2,1,4];
// console.log(findIntersection(array1, array2));
