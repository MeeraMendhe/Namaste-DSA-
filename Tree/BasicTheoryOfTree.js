/*/
A tree is a non-linear hierarchical data structure made of nodes and
edges, where one node is the root and every other node is connected 
below it through parent-child relationships. Trees are used to represent 
structure such as folders, organization charts, DOM, and search/indexing structures.

Basic theory
Node: A single element in the tree.

Root: The top node with no parent.

Parent / Child: A node can have children; those children have that 
node as their parent.

Leaf: A node with no children.

Edge: The connection between two nodes.

Subtree: Any node together with all of its descendants.

Depth / Height: Depth is how far a node is from the root; height 
is the longest path down to a leaf.

A tree does not contain cycles, and there is exactly one path from the 
root to any node. This is what makes it different from a graph in general.

Types of trees
General tree: A node can have any number of children.

Binary tree: Each node has at most 2 children, usually called left and right.

Binary Search Tree (BST): A binary tree where left subtree values are smaller 
and right subtree values are larger.

AVL tree: A self-balancing BST that keeps height difference small.

Red-black tree: Another balanced BST used to keep operations efficient.

Heap: A tree-based structure used for priority behavior, often min-heap or max-heap.

B-tree / B+ tree: Multiway balanced trees used in databases and indexing.

Trie: A prefix tree used for strings and dictionaries.

Full binary tree: Every node has either 0 or 2 children.

Complete binary tree: All levels are filled except possibly the last, which 
fills left to right.

Perfect binary tree: All internal nodes have 2 children and all leaves are at the same level.

Skewed tree: Each node has only one child, so it behaves like a linked list.

Traversal techniques
Tree traversal means visiting every node exactly once in a defined order. 
The two main categories are depth-first traversal and breadth-first traversal.

Depth-first traversal
Preorder: Node → Left → Right.

Inorder: Left → Node → Right.

Postorder: Left → Right → Node.

These are especially important for binary trees and BSTs. For example, 
inorder traversal of a BST returns values in sorted order.

Breadth-first traversal
Level order traversal: Visit nodes level by level from top to bottom, 
usually using a queue.

Simple example
For this tree:

Root = A

A has children B and C

B has children D and E

Then:

Preorder: A B D E C

Inorder: D B E A C

Postorder: D E B C A

Level order: A B C D E

Time complexity
Traversal of a tree visits each node once, so the time complexity 
is usually O(n), where n is the number of nodes. The extra space depends on recursion depth or queue size, often O(h) for DFS recursion and up to O(n) for level-order traversal in the worst case
/*/