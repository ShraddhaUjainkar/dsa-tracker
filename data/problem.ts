// data/problems.ts

export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Problem {
  id: string;
  title: string;
  difficulty: Difficulty;
  link: string;
}

export interface Topic {
  title: string;
  problems: Problem[];
}

export const dsaData: Topic[] = [
  {
    title: "Step 1: Basics",
    problems: [
      {
        id: "s1p1",
        title: "User Input/Output",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/taking-input-in-java/",
      },
      {
        id: "s1p2",
        title: "Data Types",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/data-types-in-cpp/",
      },
      {
        id: "s1p3",
        title: "Count Digits",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/count-digits5716/1",
      },
      {
        id: "s1p4",
        title: "Reverse a Number",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-integer/",
      },
      {
        id: "s1p5",
        title: "Check Palindrome",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/palindrome-number/",
      },
      {
        id: "s1p6",
        title: "GCD or HCF",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/lcm-and-gcd4510/1",
      },
    ],
  },
  {
    title: "Step 2: Sorting Techniques",
    problems: [
      {
        id: "s2p1",
        title: "Selection Sort",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/selection-sort/",
      },
      {
        id: "s2p2",
        title: "Bubble Sort",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/bubble-sort/",
      },
      {
        id: "s2p3",
        title: "Insertion Sort",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/insertion-sort/",
      },
      {
        id: "s2p4",
        title: "Merge Sort",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/merge-sort/",
      },
      {
        id: "s2p5",
        title: "Quick Sort",
        difficulty: "Medium",
        link: "https://www.geeksforgeeks.org/quick-sort/",
      },
    ],
  },
  {
    title: "Step 3: Arrays (Easy/Med/Hard)",
    problems: [
      {
        id: "s3p1",
        title: "Largest Element in Array",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/largest-element-in-array2233/1",
      },
      {
        id: "s3p2",
        title: "Second Largest Element",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/second-largest3735/1",
      },
      {
        id: "s3p3",
        title: "Check if Array is Sorted",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",
      },
      {
        id: "s3p4",
        title: "Two Sum",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "s3p5",
        title: "Kadane's Algorithm",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: "s3p6",
        title: "3Sum",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/3sum/",
      },
    ],
  },
  {
    title: "Step 4: Binary Search",
    problems: [
      {
        id: "s4p1",
        title: "Binary Search to find X in sorted array",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        id: "s4p2",
        title: "Lower Bound and Upper Bound",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/implementing-upper_bound-and-lower_bound-in-c/",
      },
      {
        id: "s4p3",
        title: "Search Insert Position",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        id: "s4p4",
        title: "Check if Input is sorted",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/check-if-array-is-sorted0115/1",
      },
      {
        id: "s4p5",
        title: "Find First and Last Position of Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      },
      {
        id: "s4p6",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        id: "s4p7",
        title: "Single Element in a Sorted Array",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/single-element-in-a-sorted-array/",
      },
      {
        id: "s4p8",
        title: "Find Peak Element",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        id: "s4p9",
        title: "Koko Eating Bananas",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        id: "s4p10",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
    ],
  },
  {
    title: "Step 5: Strings (Easy & Medium)",
    problems: [
      {
        id: "s5p1",
        title: "Remove Outermost Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/remove-outermost-parentheses/",
      },
      {
        id: "s5p2",
        title: "Reverse Words in a String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-words-in-a-string/",
      },
      {
        id: "s5p3",
        title: "Largest Odd Number in String",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/largest-odd-number-in-string/",
      },
      {
        id: "s5p4",
        title: "Longest Common Prefix",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/longest-common-prefix/",
      },
      {
        id: "s5p5",
        title: "Isomorphic Strings",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/isomorphic-strings/",
      },
      {
        id: "s5p6",
        title: "Check if two strings are anagram",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        id: "s5p7",
        title: "Sort Characters By Frequency",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/sort-characters-by-frequency/",
      },
      {
        id: "s5p8",
        title: "Maximum Nesting Depth of Parentheses",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/",
      },
      {
        id: "s5p9",
        title: "Roman to Integer",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/roman-to-integer/",
      },
    ],
  },
  {
    title: "Step 6: Linked List",
    problems: [
      {
        id: "s6p1",
        title: "Introduction to Linked List",
        difficulty: "Easy",
        link: "https://www.geeksforgeeks.org/linked-list-set-1-introduction/",
      },
      {
        id: "s6p2",
        title: "Inserting a node in Linked List",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1",
      },
      {
        id: "s6p3",
        title: "Deleting a node in Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/delete-node-in-a-linked-list/",
      },
      {
        id: "s6p4",
        title: "Find the length of the LL",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/count-nodes-of-linked-list/1",
      },
      {
        id: "s6p5",
        title: "Search an element in the LL",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1",
      },
      {
        id: "s6p6",
        title: "Middle of a Linked List",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/middle-of-the-linked-list/",
      },
      {
        id: "s6p7",
        title: "Reverse a Linked List (Iterative)",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/reverse-linked-list/",
      },
      {
        id: "s6p8",
        title: "Detect a Loop in LL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle/",
      },
      {
        id: "s6p9",
        title: "Find the starting point in LL",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/linked-list-cycle-ii/",
      },
      {
        id: "s6p10",
        title: "Palindrome Linked List",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/palindrome-linked-list/",
      },
    ],
  },
  {
    title: "Step 7: Recursion",
    problems: [
      {
        id: "s7p1",
        title: "Recursive Implementation of atoi()",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/string-to-integer-atoi/",
      },
      {
        id: "s7p2",
        title: "Pow(x, n)",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/powx-n/",
      },
      {
        id: "s7p3",
        title: "Generate Parentheses",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/generate-parentheses/",
      },
      {
        id: "s7p4",
        title: "Subset Sum",
        difficulty: "Medium",
        link: "https://practice.geeksforgeeks.org/problems/subset-sums2234/1",
      },
      {
        id: "s7p5",
        title: "N-Queens",
        difficulty: "Hard",
        link: "https://leetcode.com/problems/n-queens/",
      },
    ],
  },
  {
    title: "Step 13: Binary Trees",
    problems: [
      {
        id: "s13p1",
        title: "Inorder Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        id: "s13p2",
        title: "Level Order Traversal",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        id: "s13p3",
        title: "Maximum Depth",
        difficulty: "Easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        id: "s13p4",
        title: "Diameter of Tree",
        difficulty: "Medium",
        link: "https://leetcode.com/problems/diameter-of-binary-tree/",
      },
    ],
  },
  {
    title: "Step 15: Graphs",
    problems: [
      {
        id: "s15p1",
        title: "BFS in Graph",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
      },
      {
        id: "s15p2",
        title: "DFS in Graph",
        difficulty: "Easy",
        link: "https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
      },
      {
        id: "s15p3",
        title: "Dijkstra's Algorithm",
        difficulty: "Hard",
        link: "https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
      },
    ],
  },
];
