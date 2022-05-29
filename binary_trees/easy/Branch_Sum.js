
// Write a function that takes in a Binary Tree and returns a list of its branch
// sums ordered from leftmost branch sum to rightmost branch sum.

// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree
// branch is a path of nodes in a tree that starts at the root node and ends at
// any leaf node.

// We do it using depth-first-search way. With reqursion

// Time: O(N) constant time operations (checking)
// Space: O(N) w(very complicated)

class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
	const sums = []
    calculateBranchSums(root, 0, sums);
	return sums;
}

function calculateBranchSums(node, runningSum, sums) {
	// if we don't have a node
	if (node === null) return; 
	const newRunningSum = runningSum + node.value;
	// if our node doesn't have right or left values, it's mean we on a leaf
	if (node.left === null && node.right === null) {
		sums.push(newRunningSum);
		return;
	}
	// if we not on a leaf we call our recursive function on left and right nodes
	calculateBranchSums(node.left, newRunningSum, sums)
	calculateBranchSums(node.right, newRunningSum, sums)
}