// Accessing Hooks from the global React object (provided by the CDN in index.html)
const { useState, useEffect } = React;

const topics = [
  {
    id: 1,
    name: "Arrays Part I",
    color: "#FF6B35",
    questions: [
      { name: "Sort Colors (0s, 1s, 2s)", lc: "https://leetcode.com/problems/sort-colors/", difficulty: "Medium" },
      { name: "Repeat and Missing Number", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Merge Two Sorted Arrays Without Extra Space", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Kadane's Algorithm – Maximum Subarray", lc: "https://leetcode.com/problems/maximum-subarray/", difficulty: "Medium" },
      { name: "Merge Overlapping Intervals", lc: "https://leetcode.com/problems/merge-intervals/", difficulty: "Medium" },
      { name: "Find the Duplicate Number", lc: "https://leetcode.com/problems/find-the-duplicate-number/", difficulty: "Medium" },
    ],
  },
  {
    id: 2,
    name: "Arrays Part II",
    color: "#FF8C42",
    questions: [
      { name: "Set Matrix Zeroes", lc: "https://leetcode.com/problems/set-matrix-zeroes/", difficulty: "Medium" },
      { name: "Pascal's Triangle", lc: "https://leetcode.com/problems/pascals-triangle/", difficulty: "Easy" },
      { name: "Next Permutation", lc: "https://leetcode.com/problems/next-permutation/", difficulty: "Medium" },
      { name: "Count Inversions in an Array", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Best Time to Buy and Sell Stock", lc: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", difficulty: "Easy" },
      { name: "Rotate Image", lc: "https://leetcode.com/problems/rotate-image/", difficulty: "Medium" },
    ],
  },
  {
    id: 3,
    name: "Arrays Part III",
    color: "#F7B731",
    questions: [
      { name: "Search a 2D Matrix", lc: "https://leetcode.com/problems/search-a-2d-matrix/", difficulty: "Medium" },
      { name: "Pow(x, n)", lc: "https://leetcode.com/problems/powx-n/", difficulty: "Medium" },
      { name: "Majority Element", lc: "https://leetcode.com/problems/majority-element/", difficulty: "Easy" },
      { name: "Majority Element II", lc: "https://leetcode.com/problems/majority-element-ii/", difficulty: "Medium" },
      { name: "Unique Paths", lc: "https://leetcode.com/problems/unique-paths/", difficulty: "Medium" },
      { name: "Reverse Pairs", lc: "https://leetcode.com/problems/reverse-pairs/", difficulty: "Hard" },
    ],
  },
  {
    id: 4,
    name: "Arrays Part IV (Hashing)",
    color: "#20BF55",
    questions: [
      { name: "Two Sum", lc: "https://leetcode.com/problems/two-sum/", difficulty: "Easy" },
      { name: "4Sum", lc: "https://leetcode.com/problems/4sum/", difficulty: "Medium" },
      { name: "Longest Consecutive Sequence", lc: "https://leetcode.com/problems/longest-consecutive-sequence/", difficulty: "Medium" },
      { name: "Largest Subarray with 0 Sum", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Count Subarrays with Given XOR", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Longest Substring Without Repeating Characters", lc: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", difficulty: "Medium" },
    ],
  },
  {
    id: 5,
    name: "Linked List",
    color: "#0FA3B1",
    questions: [
      { name: "Reverse Linked List", lc: "https://leetcode.com/problems/reverse-linked-list/", difficulty: "Easy" },
      { name: "Middle of the Linked List", lc: "https://leetcode.com/problems/middle-of-the-linked-list/", difficulty: "Easy" },
      { name: "Merge Two Sorted Lists", lc: "https://leetcode.com/problems/merge-two-sorted-lists/", difficulty: "Easy" },
      { name: "Remove Nth Node From End of List", lc: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", difficulty: "Medium" },
      { name: "Delete Node in a Linked List", lc: "https://leetcode.com/problems/delete-node-in-a-linked-list/", difficulty: "Medium" },
      { name: "Add Two Numbers", lc: "https://leetcode.com/problems/add-two-numbers/", difficulty: "Medium" },
    ],
  },
  {
    id: 6,
    name: "Linked List Part II",
    color: "#1A7FBB",
    questions: [
      { name: "Intersection of Two Linked Lists", lc: "https://leetcode.com/problems/intersection-of-two-linked-lists/", difficulty: "Easy" },
      { name: "Linked List Cycle", lc: "https://leetcode.com/problems/linked-list-cycle/", difficulty: "Easy" },
      { name: "Reverse Nodes in k-Group", lc: "https://leetcode.com/problems/reverse-nodes-in-k-group/", difficulty: "Hard" },
      { name: "Palindrome Linked List", lc: "https://leetcode.com/problems/palindrome-linked-list/", difficulty: "Easy" },
      { name: "Linked List Cycle II", lc: "https://leetcode.com/problems/linked-list-cycle-ii/", difficulty: "Medium" },
      { name: "Flattening a Linked List", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Rotate List", lc: "https://leetcode.com/problems/rotate-list/", difficulty: "Medium" },
    ],
  },
  {
    id: 7,
    name: "Linked List and Arrays",
    color: "#7B2FBE",
    questions: [
      { name: "Copy List with Random Pointer", lc: "https://leetcode.com/problems/copy-list-with-random-pointer/", difficulty: "Medium" },
      { name: "3Sum", lc: "https://leetcode.com/problems/3sum/", difficulty: "Medium" },
      { name: "Trapping Rain Water", lc: "https://leetcode.com/problems/trapping-rain-water/", difficulty: "Hard" },
      { name: "Remove Duplicates from Sorted Array", lc: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", difficulty: "Easy" },
      { name: "Max Consecutive Ones", lc: "https://leetcode.com/problems/max-consecutive-ones/", difficulty: "Easy" },
    ],
  },
  {
    id: 8,
    name: "Greedy Algorithm",
    color: "#E91E8C",
    questions: [
      { name: "N Meetings in One Room", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Minimum Platforms", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Job Sequencing Problem", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Fractional Knapsack", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Greedy – Minimum Number of Coins", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Activity Selection / Weighted Job Scheduling", lc: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
    ],
  },
  {
    id: 9,
    name: "Recursion",
    color: "#FF4757",
    questions: [
      { name: "Subset Sums", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Subsets II", lc: "https://leetcode.com/problems/subsets-ii/", difficulty: "Medium" },
      { name: "Combination Sum", lc: "https://leetcode.com/problems/combination-sum/", difficulty: "Medium" },
      { name: "Combination Sum II", lc: "https://leetcode.com/problems/combination-sum-ii/", difficulty: "Medium" },
      { name: "Palindrome Partitioning", lc: "https://leetcode.com/problems/palindrome-partitioning/", difficulty: "Medium" },
      { name: "Permutation Sequence", lc: "https://leetcode.com/problems/permutation-sequence/", difficulty: "Hard" },
    ],
  },
  {
    id: 10,
    name: "Recursion & Backtracking",
    color: "#FF6B81",
    questions: [
      { name: "Permutations", lc: "https://leetcode.com/problems/permutations/", difficulty: "Medium" },
      { name: "N-Queens", lc: "https://leetcode.com/problems/n-queens/", difficulty: "Hard" },
      { name: "Sudoku Solver", lc: "https://leetcode.com/problems/sudoku-solver/", difficulty: "Hard" },
      { name: "M Coloring Problem", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Rat in a Maze", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Word Break", lc: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
    ],
  },
  {
    id: 11,
    name: "Binary Search",
    color: "#2ECC71",
    questions: [
      { name: "Nth Root of M (Binary Search)", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Median in Row-wise Sorted Matrix", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Single Element in a Sorted Array", lc: "https://leetcode.com/problems/single-element-in-a-sorted-array/", difficulty: "Medium" },
      { name: "Search in Rotated Sorted Array", lc: "https://leetcode.com/problems/search-in-rotated-sorted-array/", difficulty: "Medium" },
      { name: "Median of Two Sorted Arrays", lc: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "Hard" },
      { name: "K-th Element of Two Sorted Arrays", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Allocate Minimum Number of Pages", lc: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/", difficulty: "Medium" },
      { name: "Aggressive Cows", lc: null, gfg: true, difficulty: "Medium" },
    ],
  },
  {
    id: 12,
    name: "Heaps",
    color: "#F39C12",
    questions: [
      { name: "Max Heap / Min Heap Implementation", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Kth Largest Element in an Array", lc: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
      { name: "Maximum Sum Combination", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Find Median from Data Stream", lc: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
      { name: "Merge K Sorted Lists", lc: "https://leetcode.com/problems/merge-k-sorted-lists/", difficulty: "Hard" },
      { name: "K Most Frequent Elements", lc: "https://leetcode.com/problems/top-k-frequent-elements/", difficulty: "Medium" },
    ],
  },
  {
    id: 13,
    name: "Stack and Queue",
    color: "#8E44AD",
    questions: [
      { name: "Implement Stack using Arrays", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Implement Queue using Arrays", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Implement Stack using Linked List", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Implement Queue using Linked List", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Implement Stack using Queues", lc: "https://leetcode.com/problems/implement-stack-using-queues/", difficulty: "Easy" },
      { name: "Implement Queue using Stacks", lc: "https://leetcode.com/problems/implement-queue-using-stacks/", difficulty: "Easy" },
      { name: "Valid Parentheses", lc: "https://leetcode.com/problems/valid-parentheses/", difficulty: "Easy" },
    ],
  },
  {
    id: 14,
    name: "Stack and Queue Part II",
    color: "#6C3483",
    questions: [
      { name: "Next Greater Element", lc: "https://leetcode.com/problems/next-greater-element-i/", difficulty: "Easy" },
      { name: "Nearest Smaller Element", lc: "https://leetcode.com/problems/daily-temperatures/", difficulty: "Medium" },
      { name: "LRU Cache", lc: "https://leetcode.com/problems/lru-cache/", difficulty: "Medium" },
      { name: "Largest Rectangle in Histogram", lc: "https://leetcode.com/problems/largest-rectangle-in-histogram/", difficulty: "Hard" },
      { name: "Sliding Window Maximum", lc: "https://leetcode.com/problems/sliding-window-maximum/", difficulty: "Hard" },
      { name: "Min Stack", lc: "https://leetcode.com/problems/min-stack/", difficulty: "Medium" },
      { name: "Rotting Oranges", lc: "https://leetcode.com/problems/rotting-oranges/", difficulty: "Medium" },
      { name: "Online Stock Span", lc: "https://leetcode.com/problems/online-stock-span/", difficulty: "Medium" },
      { name: "The Celebrity Problem", lc: null, gfg: true, difficulty: "Medium" },
      { name: "LFU Cache", lc: "https://leetcode.com/problems/lfu-cache/", difficulty: "Hard" },
    ],
  },
  {
    id: 15,
    name: "String",
    color: "#16A085",
    questions: [
      { name: "Reverse Words in a String", lc: "https://leetcode.com/problems/reverse-words-in-a-string/", difficulty: "Medium" },
      { name: "Longest Palindromic Substring", lc: "https://leetcode.com/problems/longest-palindromic-substring/", difficulty: "Medium" },
      { name: "Roman to Integer", lc: "https://leetcode.com/problems/roman-to-integer/", difficulty: "Easy" },
      { name: "Integer to Roman", lc: "https://leetcode.com/problems/integer-to-roman/", difficulty: "Medium" },
      { name: "Implement strStr (Needle in Haystack)", lc: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", difficulty: "Easy" },
      { name: "String to Integer (atoi)", lc: "https://leetcode.com/problems/string-to-integer-atoi/", difficulty: "Medium" },
    ],
  },
  {
    id: 16,
    name: "String Part II",
    color: "#1ABC9C",
    questions: [
      { name: "Longest Common Prefix", lc: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy" },
      { name: "Rabin-Karp Algorithm for Pattern Searching", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Z-Algorithm (Linear Time Pattern Searching)", lc: null, gfg: true, difficulty: "Hard" },
      { name: "KMP Algorithm for Pattern Searching", lc: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", difficulty: "Hard" },
      { name: "Valid Anagram", lc: "https://leetcode.com/problems/valid-anagram/", difficulty: "Easy" },
      { name: "Count and Say", lc: "https://leetcode.com/problems/count-and-say/", difficulty: "Medium" },
    ],
  },
  {
    id: 17,
    name: "Binary Tree",
    color: "#E74C3C",
    questions: [
      { name: "Binary Tree Inorder Traversal", lc: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Easy" },
      { name: "Binary Tree Preorder Traversal", lc: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Easy" },
      { name: "Binary Tree Postorder Traversal", lc: "https://leetcode.com/problems/binary-tree-postorder-traversal/", difficulty: "Easy" },
      { name: "Binary Tree Right Side View", lc: "https://leetcode.com/problems/binary-tree-right-side-view/", difficulty: "Medium" },
      { name: "Bottom View of Binary Tree", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Top View of Binary Tree", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Binary Tree Level Order Traversal", lc: "https://leetcode.com/problems/binary-tree-level-order-traversal/", difficulty: "Medium" },
      { name: "Binary Tree Zigzag Level Order Traversal", lc: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", difficulty: "Medium" },
      { name: "Maximum Depth of Binary Tree", lc: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", difficulty: "Easy" },
      { name: "Diameter of Binary Tree", lc: "https://leetcode.com/problems/diameter-of-binary-tree/", difficulty: "Easy" },
      { name: "Balanced Binary Tree", lc: "https://leetcode.com/problems/balanced-binary-tree/", difficulty: "Easy" },
      { name: "Lowest Common Ancestor of a Binary Tree", lc: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", difficulty: "Medium" },
    ],
  },
  {
    id: 18,
    name: "Binary Tree Part II",
    color: "#C0392B",
    questions: [
      { name: "Same Tree", lc: "https://leetcode.com/problems/same-tree/", difficulty: "Easy" },
      { name: "Binary Tree Maximum Path Sum", lc: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", difficulty: "Hard" },
      { name: "Construct Binary Tree from Preorder and Inorder", lc: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", difficulty: "Medium" },
      { name: "Construct Binary Tree from Inorder and Postorder", lc: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", difficulty: "Medium" },
      { name: "Symmetric Tree", lc: "https://leetcode.com/problems/symmetric-tree/", difficulty: "Easy" },
      { name: "Flatten Binary Tree to Linked List", lc: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", difficulty: "Medium" },
      { name: "Path Sum II", lc: "https://leetcode.com/problems/path-sum-ii/", difficulty: "Medium" },
      { name: "Sum Root to Leaf Numbers", lc: "https://leetcode.com/problems/sum-root-to-leaf-numbers/", difficulty: "Medium" },
    ],
  },
  {
    id: 19,
    name: "Binary Tree Part III",
    color: "#A93226",
    questions: [
      { name: "Populating Next Right Pointers in Each Node", lc: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", difficulty: "Medium" },
      { name: "Binary Tree to DLL", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Count Complete Tree Nodes", lc: "https://leetcode.com/problems/count-complete-tree-nodes/", difficulty: "Easy" },
      { name: "Burning Tree / Time to Burn", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Morris Inorder Traversal", lc: "https://leetcode.com/problems/binary-tree-inorder-traversal/", difficulty: "Medium" },
      { name: "Morris Preorder Traversal", lc: "https://leetcode.com/problems/binary-tree-preorder-traversal/", difficulty: "Medium" },
      { name: "Vertical Order Traversal of a Binary Tree", lc: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", difficulty: "Hard" },
    ],
  },
  {
    id: 20,
    name: "Binary Search Tree",
    color: "#2980B9",
    questions: [
      { name: "Search in a Binary Search Tree", lc: "https://leetcode.com/problems/search-in-a-binary-search-tree/", difficulty: "Easy" },
      { name: "Convert Sorted Array to BST", lc: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", difficulty: "Easy" },
      { name: "Validate Binary Search Tree", lc: "https://leetcode.com/problems/validate-binary-search-tree/", difficulty: "Medium" },
      { name: "Lowest Common Ancestor of a BST", lc: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/", difficulty: "Medium" },
      { name: "Predecessor and Successor in BST", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Floor and Ceil in BST", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Insert into a BST", lc: "https://leetcode.com/problems/insert-into-a-binary-search-tree/", difficulty: "Medium" },
    ],
  },
  {
    id: 21,
    name: "Binary Search Tree Part II",
    color: "#1F618D",
    questions: [
      { name: "Delete Node in a BST", lc: "https://leetcode.com/problems/delete-node-in-a-bst/", difficulty: "Medium" },
      { name: "Kth Smallest Element in a BST", lc: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", difficulty: "Medium" },
      { name: "Kth Largest Element in BST", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Two Sum IV – Input is a BST", lc: "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/", difficulty: "Easy" },
      { name: "Binary Search Tree Iterator", lc: "https://leetcode.com/problems/binary-search-tree-iterator/", difficulty: "Medium" },
      { name: "Largest BST in a Binary Tree", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Serialize and Deserialize Binary Tree", lc: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", difficulty: "Hard" },
      { name: "Recover BST / Correct BST with Two Swapped Nodes", lc: "https://leetcode.com/problems/recover-binary-search-tree/", difficulty: "Hard" },
    ],
  },
  {
    id: 22,
    name: "Binary Trees (Miscellaneous)",
    color: "#117A65",
    questions: [
      { name: "Find Median from Data Stream", lc: "https://leetcode.com/problems/find-median-from-data-stream/", difficulty: "Hard" },
      { name: "Kth Largest Element in a Stream", lc: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", difficulty: "Easy" },
      { name: "Distinct Numbers in Window", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Kth Largest Element in an Array", lc: "https://leetcode.com/problems/kth-largest-element-in-an-array/", difficulty: "Medium" },
      { name: "Flood Fill", lc: "https://leetcode.com/problems/flood-fill/", difficulty: "Easy" },
      { name: "Number of Islands", lc: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
    ],
  },
  {
    id: 23,
    name: "Graph",
    color: "#1E8449",
    questions: [
      { name: "Clone Graph", lc: "https://leetcode.com/problems/clone-graph/", difficulty: "Medium" },
      { name: "DFS of Graph", lc: null, gfg: true, difficulty: "Easy" },
      { name: "BFS of Graph", lc: null, gfg: true, difficulty: "Easy" },
      { name: "Detect Cycle in Undirected Graph", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Detect Cycle in Directed Graph", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Topological Sort", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Number of Islands", lc: "https://leetcode.com/problems/number-of-islands/", difficulty: "Medium" },
      { name: "Is Graph Bipartite?", lc: "https://leetcode.com/problems/is-graph-bipartite/", difficulty: "Medium" },
      { name: "Dijkstra's Algorithm", lc: "https://leetcode.com/problems/network-delay-time/", difficulty: "Medium" },
      { name: "Bellman-Ford Algorithm", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Floyd Warshall Algorithm", lc: null, gfg: true, difficulty: "Medium" },
      { name: "MST using Prim's Algorithm", lc: null, gfg: true, difficulty: "Medium" },
    ],
  },
  {
    id: 24,
    name: "Graph Part II",
    color: "#196F3D",
    questions: [
      { name: "Kruskal's Algorithm (MST)", lc: "https://leetcode.com/problems/min-cost-to-connect-all-points/", difficulty: "Medium" },
      { name: "Strongly Connected Components (Kosaraju's)", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Bridge in a Graph (Tarjan's)", lc: "https://leetcode.com/problems/critical-connections-in-a-network/", difficulty: "Hard" },
      { name: "Articulation Point", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Course Schedule (Topo Sort / BFS)", lc: "https://leetcode.com/problems/course-schedule/", difficulty: "Medium" },
      { name: "Alien Dictionary", lc: null, gfg: true, difficulty: "Hard" },
    ],
  },
  {
    id: 25,
    name: "Dynamic Programming",
    color: "#6D4C9C",
    questions: [
      { name: "Maximum Product Subarray", lc: "https://leetcode.com/problems/maximum-product-subarray/", difficulty: "Medium" },
      { name: "Longest Increasing Subsequence", lc: "https://leetcode.com/problems/longest-increasing-subsequence/", difficulty: "Medium" },
      { name: "Longest Common Subsequence", lc: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
      { name: "0-1 Knapsack Problem", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Edit Distance", lc: "https://leetcode.com/problems/edit-distance/", difficulty: "Hard" },
      { name: "Maximum Sum Rectangle in a 2D Matrix", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Maximum Profit in Job Scheduling", lc: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/", difficulty: "Hard" },
    ],
  },
  {
    id: 26,
    name: "Dynamic Programming Part II",
    color: "#512E8A",
    questions: [
      { name: "Coin Change", lc: "https://leetcode.com/problems/coin-change/", difficulty: "Medium" },
      { name: "Subset Sum Problem", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Rod Cutting Problem", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Egg Drop Problem", lc: "https://leetcode.com/problems/super-egg-drop/", difficulty: "Hard" },
      { name: "Word Break", lc: "https://leetcode.com/problems/word-break/", difficulty: "Medium" },
      { name: "Palindrome Partitioning II", lc: "https://leetcode.com/problems/palindrome-partitioning-ii/", difficulty: "Hard" },
      { name: "Matrix Chain Multiplication", lc: null, gfg: true, difficulty: "Hard" },
      { name: "Burst Balloons", lc: "https://leetcode.com/problems/burst-balloons/", difficulty: "Hard" },
    ],
  },
  {
    id: 27,
    name: "Trie",
    color: "#B7440D",
    questions: [
      { name: "Implement Trie (Prefix Tree)", lc: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
      { name: "Implement Trie II", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Longest String with All Prefixes", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Number of Distinct Substrings in a String", lc: null, gfg: true, difficulty: "Medium" },
      { name: "Maximum XOR of Two Numbers in an Array", lc: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/", difficulty: "Medium" },
      { name: "Maximum XOR With an Element From Array", lc: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/", difficulty: "Hard" },
      { name: "Word Search II", lc: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
    ],
  },
];

const difficultyConfig = {
  Easy: { color: "#00b8a3", bg: "rgba(0,184,163,0.12)" },
  Medium: { color: "#ffa116", bg: "rgba(255,161,22,0.12)" },
  Hard: { color: "#ff375f", bg: "rgba(255,55,95,0.12)" },
};

function App() {
  const [openTopics, setOpenTopics] = useState({});
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("striver-sheet-progress");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("striver-sheet-progress", JSON.stringify(completed));
  }, [completed]);

  const totalQuestions = topics.reduce((sum, t) => sum + t.questions.length, 0);
  const solvedCount = Object.values(completed).filter(Boolean).length;
  
  const toggleTopicVisibility = (id) =>
    setOpenTopics((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleQuestion = (topicId, qIdx) => {
    setCompleted((prev) => ({
      ...prev,
      [`${topicId}-${qIdx}`]: !prev[`${topicId}-${qIdx}`],
    }));
  };

  const toggleTopicCompletion = (e, topic) => {
    e.stopPropagation();
    const isAllChecked = topic.questions.every((_, i) => completed[`${topic.id}-${i}`]);
    const newState = { ...completed };
    topic.questions.forEach((_, i) => {
      newState[`${topic.id}-${i}`] = !isAllChecked;
    });
    setCompleted(newState);
  };

  const expandAll = () => {
    const all = {};
    topics.forEach((t) => (all[t.id] = true));
    setOpenTopics(all);
  };
  const collapseAll = () => setOpenTopics({});

  const filteredTopics = topics
    .map((topic) => ({
      ...topic,
      questions: topic.questions.filter((q) => {
        const matchesDiff = filter === "All" || q.difficulty === filter;
        const matchesSearch =
          search === "" ||
          q.name.toLowerCase().includes(search.toLowerCase());
        return matchesDiff && matchesSearch;
      }),
    }))
    .filter((t) => t.questions.length > 0);

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.badge}>BHARAT SHARMA</div>
          <h1 style={styles.title}>Striver's SDE Sheet</h1>
          <p style={styles.subtitle}>
            Top Coding Interview Problems — {solvedCount}/{totalQuestions} Completed
          </p>
          <div style={styles.statsRow}>
            <div style={styles.stat}>
              <span style={styles.statNum}>{totalQuestions}</span>
              <span style={styles.statLabel}>Total</span>
            </div>
            <div style={styles.divider} />
            <div style={styles.stat}>
              <span style={{ ...styles.statNum, color: "#3d5af1" }}>{solvedCount}</span>
              <span style={styles.statLabel}>Solved</span>
            </div>
            <div style={styles.divider} />
            <div style={styles.stat}>
              <span style={{ ...styles.statNum, color: "#00b8a3" }}>{Math.round((solvedCount/totalQuestions)*100)}%</span>
              <span style={styles.statLabel}>Progress</span>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.controls}>
        <input
          style={styles.search}
          placeholder="🔍  Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div style={styles.filters}>
          {["All", "Easy", "Medium", "Hard"].map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              style={{
                ...styles.filterBtn,
                background: filter === d
                  ? (d === "All" ? "#3d5af1" : difficultyConfig[d]?.color || "#3d5af1")
                  : "rgba(255,255,255,0.06)",
                color: filter === d ? "#fff" : "#aaa",
                borderColor: filter === d
                  ? (d === "All" ? "#3d5af1" : difficultyConfig[d]?.color || "#3d5af1")
                  : "rgba(255,255,255,0.1)",
              }}
            >
              {d}
            </button>
          ))}
        </div>
        <div style={styles.expandBtns}>
          <button style={styles.textBtn} onClick={expandAll}>Expand All</button>
          <span style={{ color: "#555" }}>|</span>
          <button style={styles.textBtn} onClick={collapseAll}>Collapse All</button>
        </div>
      </div>

      <div style={styles.topicList}>
        {filteredTopics.map((topic) => {
          const isOpen = openTopics[topic.id];
          const topicSolvedCount = topic.questions.filter((_, i) => completed[`${topic.id}-${i}`]).length;
          const isTopicFinished = topicSolvedCount === topic.questions.length;

          return (
            <div key={topic.id} style={styles.topicCard}>
              <button
                style={styles.topicHeader}
                onClick={() => toggleTopicVisibility(topic.id)}
              >
                <div style={styles.topicLeft}>
                  <input 
                    type="checkbox" 
                    checked={isTopicFinished}
                    onChange={(e) => toggleTopicCompletion(e, topic)}
                    style={styles.checkbox}
                  />
                  <div
                    style={{
                      ...styles.topicDot,
                      background: topic.color,
                      boxShadow: `0 0 10px ${topic.color}88`,
                    }}
                  />
                  <div>
                    <div style={{...styles.topicName, textDecoration: isTopicFinished ? 'line-through' : 'none', opacity: isTopicFinished ? 0.6 : 1}}>{topic.name}</div>
                    <div style={styles.topicCount}>
                      {topicSolvedCount}/{topic.questions.length} problems done
                    </div>
                  </div>
                </div>
                <div style={styles.topicRight}>
                  <div style={styles.diffPills}>
                    {["Easy", "Medium", "Hard"].map((d) => {
                      const count = topic.questions.filter(
                        (q) => q.difficulty === d
                      ).length;
                      if (!count) return null;
                      return (
                        <span
                          key={d}
                          style={{
                            ...styles.diffPill,
                            color: difficultyConfig[d].color,
                            background: difficultyConfig[d].bg,
                          }}
                        >
                          {count} {d}
                        </span>
                      );
                    })}
                  </div>
                  <span style={{ ...styles.chevron, transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
                </div>
              </button>

              {isOpen && (
                <div style={styles.questionList}>
                  {topic.questions.map((q, i) => {
                    const isDone = completed[`${topic.id}-${i}`];
                    return (
                      <div key={i} style={{...styles.questionRow, background: isDone ? 'rgba(0,184,163,0.03)' : 'transparent'}}>
                        <div style={styles.qLeft}>
                          <input 
                            type="checkbox" 
                            checked={!!isDone}
                            onChange={() => toggleQuestion(topic.id, i)}
                            style={styles.checkbox}
                          />
                          <span style={styles.qNum}>{i + 1}</span>
                          <span style={{...styles.qName, textDecoration: isDone ? 'line-through' : 'none', color: isDone ? '#666' : '#ccc'}}>{q.name}</span>
                        </div>
                        <div style={styles.qRight}>
                          <span
                            style={{
                              ...styles.diffTag,
                              color: difficultyConfig[q.difficulty].color,
                              background: difficultyConfig[q.difficulty].bg,
                              opacity: isDone ? 0.5 : 1
                            }}
                          >
                            {q.difficulty}
                          </span>
                          {q.lc ? (
                            <a
                              href={q.lc}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{...styles.lcLink, opacity: isDone ? 0.5 : 1}}
                            >
                              LeetCode →
                            </a>
                          ) : (
                            <span style={styles.gfgBadge}>GFG / Other</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div style={styles.footer}>
        Source: <a href="https://takeuforward.org/dsa/strivers-sde-sheet-top-coding-interview-problems" target="_blank" rel="noopener noreferrer" style={{ color: "#3d5af1" }}>takeuforward.org</a>
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0d0d0f",
    color: "#e8e8e8",
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    paddingBottom: 60,
  },
  header: {
    background: "linear-gradient(135deg, #0d0d0f 0%, #13131a 50%, #0d0d0f 100%)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "48px 24px 36px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  },
  headerInner: { maxWidth: 720, margin: "0 auto", position: "relative", zIndex: 1 },
  badge: {
    display: "inline-block",
    background: "rgba(61,90,241,0.15)",
    color: "#3d5af1",
    border: "1px solid rgba(61,90,241,0.3)",
    borderRadius: 100,
    padding: "4px 14px",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  title: {
    fontSize: "clamp(28px, 5vw, 48px)",
    fontWeight: 800,
    margin: "0 0 10px",
    background: "linear-gradient(135deg, #fff 0%, #aaa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "-0.02em",
  },
  subtitle: { color: "#888", fontSize: 15, margin: "0 0 28px", lineHeight: 1.6 },
  statsRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  stat: { display: "flex", flexDirection: "column", alignItems: "center", gap: 2 },
  statNum: { fontSize: 28, fontWeight: 800, color: "#fff", lineHeight: 1 },
  statLabel: { fontSize: 11, color: "#666", textTransform: "uppercase", letterSpacing: "0.08em" },
  divider: { width: 1, height: 36, background: "rgba(255,255,255,0.08)" },
  controls: {
    maxWidth: 900,
    margin: "28px auto 0",
    padding: "0 20px",
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    alignItems: "center",
  },
  search: {
    flex: "1 1 240px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    padding: "10px 14px",
    color: "#e8e8e8",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.2s",
  },
  filters: { display: "flex", gap: 6 },
  filterBtn: {
    padding: "8px 14px",
    borderRadius: 8,
    border: "1px solid",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 600,
    transition: "all 0.15s",
  },
  expandBtns: { display: "flex", gap: 10, alignItems: "center", marginLeft: "auto" },
  textBtn: {
    background: "none",
    border: "none",
    color: "#3d5af1",
    cursor: "pointer",
    fontSize: 13,
    padding: 0,
    fontWeight: 500,
  },
  topicList: {
    maxWidth: 900,
    margin: "20px auto 0",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  topicCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 14,
    overflow: "hidden",
    transition: "border-color 0.2s",
  },
  topicHeader: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    gap: 16,
  },
  topicLeft: { display: "flex", alignItems: "center", gap: 14 },
  topicDot: { width: 12, height: 12, borderRadius: "50%", flexShrink: 0 },
  topicName: { fontSize: 15, fontWeight: 700, color: "#e8e8e8", marginBottom: 2 },
  topicCount: { fontSize: 12, color: "#666" },
  topicRight: { display: "flex", alignItems: "center", gap: 10, flexShrink: 0 },
  diffPills: { display: "flex", gap: 6, flexWrap: "wrap" },
  diffPill: {
    fontSize: 11,
    fontWeight: 600,
    padding: "3px 8px",
    borderRadius: 6,
  },
  chevron: { color: "#555", fontSize: 18, transition: "transform 0.2s", display: "inline-block" },
  questionList: {
    borderTop: "1px solid rgba(255,255,255,0.06)",
    padding: "8px 0",
  },
  questionRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    gap: 12,
    transition: "background 0.15s",
    borderBottom: "1px solid rgba(255,255,255,0.03)",
  },
  qLeft: { display: "flex", alignItems: "center", gap: 12, minWidth: 0 },
  qNum: { color: "#444", fontSize: 12, fontWeight: 700, width: 22, textAlign: "right", flexShrink: 0 },
  qName: { fontSize: 14, color: "#ccc", wordBreak: "break-word" },
  qRight: { display: "flex", alignItems: "center", gap: 8, flexShrink: 0 },
  diffTag: {
    fontSize: 11,
    fontWeight: 600,
    padding: "3px 8px",
    borderRadius: 6,
  },
  lcLink: {
    fontSize: 12,
    color: "#3d5af1",
    textDecoration: "none",
    fontWeight: 600,
    padding: "4px 10px",
    background: "rgba(61,90,241,0.1)",
    borderRadius: 6,
    border: "1px solid rgba(61,90,241,0.2)",
    whiteSpace: "nowrap",
  },
  gfgBadge: {
    fontSize: 12,
    color: "#888",
    fontWeight: 500,
    padding: "4px 10px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: 6,
    border: "1px solid rgba(255,255,255,0.08)",
    whiteSpace: "nowrap",
  },
  footer: {
    textAlign: "center",
    color: "#555",
    fontSize: 13,
    marginTop: 40,
  },
  checkbox: {
    width: 18,
    height: 18,
    cursor: "pointer",
    accentColor: "#3d5af1",
  }
};
